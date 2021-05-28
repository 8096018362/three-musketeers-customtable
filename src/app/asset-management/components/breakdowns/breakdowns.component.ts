import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BaseComponent } from 'src/app/shared/utils/base.component';
import { IDropDown } from 'src/app/shared/interfaces/drop-down.interface';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ValidationService } from 'src/app/shared/services/validation.service';
import { takeWhile } from 'rxjs/operators';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { IBreakdown } from '../../interfaces/breakdown.interface';
import { BreakdownService } from '../../services/breakdown.service';
import { AssetManagementService } from '../../services/asset-management.service';
import { IAsset } from '../../interfaces/asset.interface';
import { IAssetCategory } from '../../interfaces/asset-category.interface';
import { Breakdown } from '../../models/breakdown.model';

interface IBreakdownModalDialogData {
  breakdown: IBreakdown;
  assetCategories: Array<IDropDown>;
}

@Component({
  templateUrl: 'breakdown.dialog.html',
  styleUrls: ['./breakdowns.component.scss'],
})
export class BreakdownDialog implements OnInit, OnDestroy {
  form: FormGroup;
  assetCategories: Array<IDropDown> = [];
  machineNames: Array<IDropDown> = [];
  private isActive = true;

  constructor(
    public dialogRef: MatDialogRef<BreakdownDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IBreakdownModalDialogData,
    private validationService: ValidationService,
    private service: BreakdownService,
    private assetManagementService: AssetManagementService) {
    this.form = this.service.buildForm(data.breakdown);

    this.assetCategories = data.assetCategories;
  }

  ngOnInit(): void {
    this.form.get('assetCategory').valueChanges.pipe(takeWhile(() => this.isActive)).subscribe((value) => {
      if (value) {
        this.assetManagementService.getAssetsByCategory(value).subscribe((data: Array<IAsset>) => {
          if (data) {
            this.resetValues();
            data.forEach(a => {
              this.machineNames.push({ text: a.machineName, value: a.category });
            });
          }
        });
      }
    });

    this.form.get('assetFKey').valueChanges.pipe(takeWhile(() => this.isActive)).subscribe((value) => {
      if (value) {
        const category = this.assetCategories.find((c) => c.value === value);
        if (category) {
          this.form.get('machineName').setValue(category.text);
        }
      }
    });
  }

  private resetValues(): void {
    this.machineNames = [];
    this.form.get('assetFKey').reset();
    this.form.get('machineName').reset();
  }

  ok(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.validationService.validateForm(this.form);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.isActive = false;
  }
}

@Component({
  selector: 'app-breakdowns',
  templateUrl: './breakdowns.component.html',
  styleUrls: ['./breakdowns.component.scss'],
  providers: [DatePipe]
})
export class BreakdownsComponent extends BaseComponent implements OnInit {
  assetCategories = [];

  constructor(
    private route: ActivatedRoute,
    datePipe: DatePipe,
    private dialog: MatDialog,
    dialogService: DialogService,
    breakdownService: BreakdownService) {
    super(breakdownService, dialogService, datePipe);

    this.originalData = route.snapshot.data.breakdowns || [];

    const assetCategories = this.route.snapshot.data.assetCategories as Array<IAssetCategory>;
    if (assetCategories) {
      assetCategories.forEach((c) => {
        this.assetCategories.push({ text: c.categoryName, value: c.pKey });
      });
    }

    this.displayedColumns = [
      'machineName',
      'location',
      'breakDownDetails',
      'reportedDate',
      'rectifiedDate',
      'workOrderNumber',
      'downTimeDuration',
      'pKey'
    ];
  }

  ngOnInit() {
    this.init(this.originalData);
  }

  public add(bool: boolean): void {
    this.openModal(new Breakdown());
  }

  public edit(asset: IBreakdown): void {
    this.openModal(asset);
  }

  public openModal(model: IBreakdown): void {
    if (model) {
      const dialogRef = this.dialog.open(BreakdownDialog, {
        disableClose: true,
        width: '600px',
        data: { breakdown: model, assetCategories: this.assetCategories }
      });

      dialogRef.afterClosed().subscribe((item: IBreakdown) => {
        if (item) {
          this.addOrUpdate(item);
        }
      });
    }
  }
}
