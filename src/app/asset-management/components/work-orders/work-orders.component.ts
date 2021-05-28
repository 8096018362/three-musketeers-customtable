import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BaseComponent } from 'src/app/shared/utils/base.component';
import { FormGroup } from '@angular/forms';
import { IDropDown } from 'src/app/shared/interfaces/drop-down.interface';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ValidationService } from 'src/app/shared/services/validation.service';
import { WorkorderService } from '../../services/workorder.service';
import { AssetManagementService } from '../../services/asset-management.service';
import { takeWhile } from 'rxjs/operators';
import { IAsset } from '../../interfaces/asset.interface';
import { IWorkOrder } from '../../interfaces/work-order.interface';
import { WorkOrder } from '../../models/work-order.model';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { IAssetCategory } from '../../interfaces/asset-category.interface';

interface IWorkOrderModalDialogData {
  workOrder: IWorkOrder;
  assetCategories: Array<IDropDown>;
}

@Component({
  templateUrl: 'workorder.dialog.html',
})
export class WorkOrderDialog implements OnInit, OnDestroy {
  form: FormGroup;
  assetCategories: Array<IDropDown> = [];
  machineNames: Array<IDropDown> = [];
  private isActive = true;

  constructor(
    public dialogRef: MatDialogRef<WorkOrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IWorkOrderModalDialogData,
    private validationService: ValidationService,
    private service: WorkorderService,
    private assetManagementService: AssetManagementService) {
    this.form = this.service.buildForm(data.workOrder);

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
        this.form.get('machineName').setValue(this.assetCategories.find((c) => c.value === value).text);
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
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss'],
  providers: [DatePipe]
})
export class WorkOrdersComponent extends BaseComponent implements OnInit {
  assetCategories = [];

  constructor(
    private route: ActivatedRoute,
    datePipe: DatePipe,
    private dialog: MatDialog,
    dialogService: DialogService,
    service: WorkorderService) {
    super(service, dialogService, datePipe);

    this.originalData = route.snapshot.data.workOrders;

    const assetCategories = this.route.snapshot.data.assetCategories as Array<IAssetCategory>;
    if (assetCategories) {
      assetCategories.forEach((c) => {
        this.assetCategories.push({ text: c.categoryName, value: c.pKey });
      });
    }

    this.displayedColumns = [
      'workOrderNumber',
      'createdDate',
      'workType',
      'machineName',
      'location',
      'workNature',
      'scope',
      'completedDate',
      'approvedBy',
      'duration',
      'createdBy',
      'status',
      'cost',
      'quotationNumber',
      'quotationDate',
      'manHrs',
      'pKey'
    ];
  }

  ngOnInit() {
    this.init(this.originalData);
  }

  public add(bool: boolean): void {
    this.openModal(new WorkOrder());
  }

  public edit(asset: IWorkOrder): void {
    this.openModal(asset);
  }

  public openModal(model: IWorkOrder): void {
    if (model) {
      const dialogRef = this.dialog.open(WorkOrderDialog, {
        disableClose: true,
        width: '600px',
        data: { workOrder: model, assetCategories: this.assetCategories }
      });

      dialogRef.afterClosed().subscribe((item: IWorkOrder) => {
        if (item) {
          this.addOrUpdate(item);
        }
      });
    }
  }
}
