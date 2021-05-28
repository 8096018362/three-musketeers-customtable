import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog
} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { IDropDown } from 'src/app/shared/interfaces/drop-down.interface';
import { ValidationService } from 'src/app/shared/services/validation.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { BaseComponent } from 'src/app/shared/utils/base.component';
import { IAsset } from '../../interfaces/asset.interface';
import { AssetService } from '../../services/asset.service';
import { IAssetCategory } from '../../interfaces/asset-category.interface';
import { Asset } from '../../models/asset.model';

interface IAssetModalDialogData {
  asset: IAsset;
  assetCategories: Array<IDropDown>;
}
@Component({
  templateUrl: 'asset.dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class AssetDialog {
  assetForm: FormGroup;
  makes: IDropDown[];
  ratings: IDropDown[];
  criticalities: IDropDown[];
  assetCategories: Array<IDropDown> = [];

 

  constructor(
    public dialogRef: MatDialogRef<AssetDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IAssetModalDialogData,
    private validationService: ValidationService,
    private assetService: AssetService,
    private sharedService: SharedService) {
    this.assetForm = this.assetService.buildAssetForm(data.asset);

    this.assetCategories = data.assetCategories;
    this.makes = this.sharedService.getYears();
    this.ratings = this.sharedService.getRatings();
    this.criticalities = this.sharedService.getCriticalities();
  }

  ok(): void {
    if (this.assetForm.valid) {
      this.dialogRef.close(this.assetForm.value);
    } else {
      this.validationService.validateForm(this.assetForm);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
  providers: [DatePipe]
})
export class AssetsComponent extends BaseComponent implements OnInit {
  assetCategories = [];

  public sampleResponse: any = {
    displayHeader: [{
      displayName: 'Pkey',
      name: 'pkey',
      defaultColumn: true,
      show: true,
      searchFieldType: 'number'
    },
    {
      displayName: 'Model Number',
      name: 'modelNumber',
      defaultColumn: false,
      show: false,
      searchFieldType: 'text'
    },
    {
      displayName: 'Installed Date',
      name: 'installedDate',
      defaultColumn: false,
      show: false,
      searchFieldType: 'date'
    },
    {
      displayName: 'Asset Uid',
      name: 'assetUid',
      defaultColumn: true,
      show: true,
      searchFieldType: 'text'
    },
    {
      displayName: 'Criticality',
      name: 'criticality',
      defaultColumn: true,
      show: true,
      searchFieldType: 'number'
    },


    {
      displayName: 'Customer Id',
      name: 'customerId',
      defaultColumn: true,
      show: true,
      searchFieldType: 'number'
    },
    {
      displayName: 'Description',
      name: 'description',
      defaultColumn: true,
      show: true,
      searchFieldType: 'text'
    },
    {
      displayName: 'Warranty Expiry',
      name: 'warrantyExpiry',
      defaultColumn: true,
      show: true,
      searchFieldType: 'date'
    },
    {
      displayName: 'Machine Name',
      name: 'machineName',
      defaultColumn: false,
      show: false,
      searchFieldType: 'text'
    },
    {
      displayName: 'Make',
      name: 'make',
      defaultColumn: false,
      show: false,
      searchFieldType: 'text'
    },
    {
      displayName: 'Serial Number',
      name: 'serialNumber',
      defaultColumn: false,
      show: false,
      searchFieldType: 'text'
    }],
    data: [
      {
        "pkey": 1,
        "assetUid": "ast128765",
        "customerId": 12345,
        "description": "hello123",
        "machineName": "caterpillar",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:10",
        "warrantyExpiry": "2021-03-14T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 1,
        "criticality": 2
      },
      {
        "pkey": 2,
        "assetUid": "ast128766",
        "customerId": 12346,
        "description": "hello",
        "machineName": "JCB",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-13T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 3,
        "assetUid": "ast128767",
        "customerId": 12347,
        "description": "hello",
        "machineName": "JCB small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-12T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 4,
        "assetUid": "ast128768",
        "customerId": 12345,
        "description": "hello",
        "machineName": "JCB heavy",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-11T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "3",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 5,
        "assetUid": "ast128769",
        "customerId": 12347,
        "description": "hello",
        "machineName": "caterpillar small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-10T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "3",
        "supplier": "TATA",
        "category": 2,
        "criticality": 3
      },
      {
        "pkey": 6,
        "assetUid": "ast128765",
        "customerId": 12345,
        "description": "hello123",
        "machineName": "caterpillar",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:10",
        "warrantyExpiry": "2021-03-14T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 1,
        "criticality": 2
      },
      {
        "pkey": 7,
        "assetUid": "ast128766",
        "customerId": 12346,
        "description": "hello",
        "machineName": "JCB",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-13T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 2
      }, {
        "pkey": 8,
        "assetUid": "ast128767",
        "customerId": 12347,
        "description": "hello",
        "machineName": "JCB small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-12T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 2
      }, {
        "pkey": 1,
        "assetUid": "ast128765",
        "customerId": 12345,
        "description": "hello123",
        "machineName": "caterpillar",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:10",
        "warrantyExpiry": "2021-03-14T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 1,
        "criticality": 2
      },
      {
        "pkey": 2,
        "assetUid": "ast128766",
        "customerId": 12346,
        "description": "hello",
        "machineName": "JCB",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-13T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 3,
        "assetUid": "ast128767",
        "customerId": 12347,
        "description": "hello",
        "machineName": "JCB small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-12T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 4,
        "assetUid": "ast128768",
        "customerId": 12345,
        "description": "hello",
        "machineName": "JCB heavy",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-11T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "3",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 5,
        "assetUid": "ast128769",
        "customerId": 12347,
        "description": "hello",
        "machineName": "caterpillar small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-10T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "3",
        "supplier": "TATA",
        "category": 2,
        "criticality": 3
      },
      {
        "pkey": 6,
        "assetUid": "ast128765",
        "customerId": 12345,
        "description": "hello123",
        "machineName": "caterpillar",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:10",
        "warrantyExpiry": "2021-03-14T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 1,
        "criticality": 2
      },
      {
        "pkey": 7,
        "assetUid": "ast128766",
        "customerId": 12346,
        "description": "hello",
        "machineName": "JCB",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-13T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 2
      }, {
        "pkey": 8,
        "assetUid": "ast128767",
        "customerId": 12347,
        "description": "hello",
        "machineName": "JCB small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-12T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 2
      }, {
        "pkey": 1,
        "assetUid": "ast128765",
        "customerId": 12345,
        "description": "hello123",
        "machineName": "caterpillar",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:10",
        "warrantyExpiry": "2021-03-14T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 1,
        "criticality": 2
      },
      {
        "pkey": 2,
        "assetUid": "ast128766",
        "customerId": 12346,
        "description": "hello",
        "machineName": "JCB",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-13T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 3,
        "assetUid": "ast128767",
        "customerId": 12347,
        "description": "hello",
        "machineName": "JCB small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-12T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 4,
        "assetUid": "ast128768",
        "customerId": 12345,
        "description": "hello",
        "machineName": "JCB heavy",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-11T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "3",
        "supplier": "TATA",
        "category": 2,
        "criticality": 1
      }, {
        "pkey": 5,
        "assetUid": "ast128769",
        "customerId": 12347,
        "description": "hello",
        "machineName": "caterpillar small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-10T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "3",
        "supplier": "TATA",
        "category": 2,
        "criticality": 3
      },
      {
        "pkey": 6,
        "assetUid": "ast128765",
        "customerId": 12345,
        "description": "hello123",
        "machineName": "caterpillar",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:10",
        "warrantyExpiry": "2021-03-14T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 1,
        "criticality": 2
      },
      {
        "pkey": 7,
        "assetUid": "ast128766",
        "customerId": 12346,
        "description": "hello",
        "machineName": "JCB",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-13T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 2
      }, {
        "pkey": 8,
        "assetUid": "ast128767",
        "customerId": 12347,
        "description": "hello",
        "machineName": "JCB small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-12T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "1",
        "supplier": "TATA",
        "category": 2,
        "criticality": 2
      }, {
        "pkey": 9,
        "assetUid": "ast128768",
        "customerId": 12345,
        "description": "hello",
        "machineName": "JCB heavy",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-11T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "3",
        "supplier": "TATA",
        "category": 2,
        "criticality": 2
      }, {
        "pkey": 10,
        "assetUid": "ast128769",
        "customerId": 12347,
        "description": "hello",
        "machineName": "caterpillar small",
        "make": "2018",
        "serialNumber": "546yhgt9uy2",
        "modelNumber": "h343h8743h09j",
        "installedDate": "2019-06-02T16:59:51",
        "warrantyExpiry": "2021-03-10T10:30:50",
        "isActive": true,
        "location": "india",
        "powerRating": "3",
        "supplier": "TATA",
        "category": 2,
        "criticality": 3
      }

    ]
  }

  constructor(
    datePipe: DatePipe,
    private assetService: AssetService,
    dialogService: DialogService,
    private route: ActivatedRoute,
    private dialog: MatDialog) {
    super(assetService, dialogService, datePipe);
    this.originalData = route.snapshot.data.assets || [];

    const assetCategories = this.route.snapshot.data.assetCategories as Array<IAssetCategory>;
    if (assetCategories) {
      assetCategories.forEach((c) => {
        this.assetCategories.push({ text: c.categoryName, value: c.pKey });
      });
    }

    this.displayedColumns = [
      'machineName',
      'description',
      'make',
      'serialNumber',
      'modelNumber',
      'installedDate',
      'warrantyExpiry',
      'location',
      'powerRating',
      'supplier',
      'category',
      'criticality',
      'pkey'
    ];
  }

  ngOnInit() {
    this.init(this.originalData);
  }

  getCategory(id: string): string {
    // return this.assetCategories?.find((c) => c.value === id)?.text || '';
    return id;
  }

  getCriticality(criticality: number): string {
    let color = null;
    switch (criticality) {
      case 1:
        color = 'High';
        break;
      case 2:
        color = 'Meduim';
        break;
      case 3:
        color = 'Low';
        break;

      default:
        break;
    }
    return color;
  }

  getColor(criticality: number): string {
    let color = null;
    switch (criticality) {
      case 1:
        color = 'red';
        break;
      case 2:
        color = 'orange';
        break;
      case 3:
        color = 'green';
        break;

      default:
        break;
    }
    return color;
  }

  public add(): void {
    this.openModal(new Asset());
  }

  public edit(asset: IAsset): void {
    this.openModal(asset);
  }

  public openModal(a: IAsset): void {
    if (a) {
      const dialogRef = this.dialog.open(AssetDialog, {
        disableClose: true,
        width: '600px',
        data: { asset: a, assetCategories: this.assetCategories }
      });

      dialogRef.afterClosed().subscribe((asset: IAsset) => {
        if (asset) {
          this.addOrUpdate(asset);
        }
      });
    }
  }
}
