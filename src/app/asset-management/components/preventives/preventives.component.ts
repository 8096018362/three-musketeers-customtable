import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BaseComponent } from 'src/app/shared/utils/base.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { PreventiveService } from '../../services/preventive.service';
import { IAssetCategory } from '../../interfaces/asset-category.interface';
import { IPreventive } from '../../interfaces/preventive.interface';
import { IDropDown } from 'src/app/shared/interfaces/drop-down.interface';
import { FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/shared/services/validation.service';
import { AssetManagementService } from '../../services/asset-management.service';
import { takeWhile } from 'rxjs/operators';
import { IAsset } from '../../interfaces/asset.interface';
import { Preventive } from '../../models/preventive.model';

interface IPreventiveModalDialogData {
  preventive: IPreventive;
  assetCategories: Array<IDropDown>;
}

@Component({
  templateUrl: 'preventive.dialog.html',
})
export class PreventiveDialog implements OnInit, OnDestroy {
  form: FormGroup;
  assetCategories: Array<IDropDown> = [];
  machineNames: Array<IDropDown> = [];
  private isActive = true;

  constructor(
    public dialogRef: MatDialogRef<PreventiveDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IPreventiveModalDialogData,
    private validationService: ValidationService,
    private service: PreventiveService,
    private assetManagementService: AssetManagementService) {
    this.form = this.service.buildForm(data.preventive);

    this.assetCategories = data.assetCategories;
  }

  ngOnInit(): void {
    this.form.get('assetCategory').valueChanges.pipe(takeWhile(() => this.isActive)).subscribe((value) => {
      if (value) {
        this.assetManagementService.getAssetsByCategory(value).subscribe((data: Array<IAsset>) => {
          if (data) {
            this.resetValues();
            data.forEach((a) => {
              this.machineNames.push({ text: a.machineName, value: a.category });
            });
          }
        });
      }
    });

    this.form.get('assetFkey').valueChanges.pipe(takeWhile(() => this.isActive)).subscribe((value) => {
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
    this.form.get('assetFkey').reset();
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
  selector: 'app-preventives',
  templateUrl: './preventives.component.html',
  styleUrls: ['./preventives.component.scss'],
  providers: [DatePipe]
})
export class PreventivesComponent extends BaseComponent implements OnInit {
  assetCategories = [];

  constructor(
    private route: ActivatedRoute,
    datePipe: DatePipe,
    private dialog: MatDialog,
    dialogService: DialogService,
    service: PreventiveService) {
    super(service, dialogService, datePipe);

    this.originalData = route.snapshot.data.preventives || [];

    const assetCategories = this.route.snapshot.data.assetCategories as Array<IAssetCategory>;
    if (assetCategories) {
      assetCategories.forEach((c) => {
        this.assetCategories.push({ text: c.categoryName, value: c.pKey });
      });
    }

    this.displayedColumns = [
      'machineName',
      'location',
      'checkUp',
      'nextScheduledDate',
      'lastWorkedOn',
      'lastBreakDown',
      'pkey'
    ];
  }

  ngOnInit() {
    this.init(this.originalData);
  }

  public add(bool: boolean): void {
    this.openModal(new Preventive());
  }

  public edit(asset: IPreventive): void {
    this.openModal(asset);
  }

  public openModal(model: IPreventive): void {
    if (model) {
      const dialogRef = this.dialog.open(PreventiveDialog, {
        disableClose: true,
        width: '600px',
        data: { preventive: model, assetCategories: this.assetCategories }
      });

      dialogRef.afterClosed().subscribe((item: IPreventive) => {
        if (item) {
          this.addOrUpdate(item);
        }
      });
    }
  }
}
