import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  dataSource: any = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  public poForm: FormGroup;

  displayedColumns = [];
  columnsToDisplay = [];


  constructor(
    private readonly fb: FormBuilder
  ) {
    this.poForm = new FormGroup({
      'items': new FormArray([])
    });
  }


  ngOnInit() {
    this.sampleResponse.displayHeader.map((col: any) => {
      if (col.defaultColumn) {
        this.displayedColumns.push({ value: col.name, header: col.displayName })
        this.columnsToDisplay = this.displayedColumns.map(x => x.value);
        this.selectedColumns.push(col.name)
      }
    });
    setTimeout(() => {
      this.dataSource.data = this.sampleResponse.data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 1000);
  }


  public sampleResponse: any = {
    displayHeader: [{
      displayName: 'Pkey',
      name: 'pkey',
      defaultColumn: false,
      show: false,
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
      defaultColumn: true,
      show: true,
      searchFieldType: 'text'
    },
    {
      displayName: 'Make',
      name: 'make',
      defaultColumn: true,
      show: true,
      searchFieldType: 'text'
    },
    {
      displayName: 'Serial Number',
      name: 'serialNumber',
      defaultColumn: true,
      show: true,
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
        "installedDate": "2019-06-03T16:59:10",
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

  public addColumns() {
    this.columnsToDisplay.push("pkey");
    this.displayedColumns.push({ value: 'pkey', header: 'P Key' })
  }


  selectedColumns: any = [];

  columnOpearation(index: any) {
    // this.selname = "";
    // this.selfieldType = "";
    if (this.sampleResponse.displayHeader[index].show) {
      this.sampleResponse.displayHeader[index].show = false;
    } else {
      this.sampleResponse.displayHeader[index].show = true;
    }

    this.displayedColumns = [];
    this.columnsToDisplay = [];
    this.sampleResponse.displayHeader.forEach((element: { show: any; name: any; displayName: any }) => {
      if (element.show) {
        this.columnsToDisplay.push(element.name);
        this.displayedColumns.push({ value: element.name, header: element.displayName })
      }
    });
  }
  searchArrayType1: any = [
    {
      searchType: 'wholeSearch'
    },
    {
      searchType: 'greterthan'
    },
    {
      searchType: 'greterthanorequal'
    },
    {
      searchType: 'lessthan'
    },
    {
      searchType: 'lessthanorequal'
    },
    {
      searchType: 'between'
    }
  ];

  searchArrayType2: any = [
    {
      searchType: 'wholeSearch'
    }
  ];

  addMultiFields(obj: any) {
    obj.searchOptions = obj.searchFieldType === 'text' ? this.searchArrayType2 : this.searchArrayType1;
    let Aobj: any = this.poForm.get('items');
    let checkingStatus = true;

    if (Aobj.value.length) {
      for (let i = 0; i < Aobj.value.length; i++) {
        if (obj.displayName === this.poForm.value.items[i].m_displyKey) {
          (this.poForm.get('items') as FormArray).removeAt(i);
          checkingStatus = false;
        }
      }
      if (checkingStatus) {
        this.onAddItem(obj)
      }
    } else {
      this.onAddItem(obj)
    }
  }

  onAddItem(obj: any) {
    (this.poForm.get('items') as FormArray).push(this.createItem(obj));
  }
  createItem(obj: any) {
    return new FormGroup({
      'm_searchKey': new FormControl(obj.name ? obj.name : '', Validators.required),
      'm_displyKey': new FormControl(obj.displayName ? obj.displayName : '', Validators.required),
      'm_selSearchName': new FormControl("wholeSearch", Validators.required),
      'm_searchArray': new FormControl(obj.searchOptions),
      'm_searchFieldType': new FormControl(obj.searchFieldType),

      "m_searchInputValue": new FormControl(null, Validators.required),
      "m_searchInputFromValue": new FormControl(null, Validators.required),
      "m_searchInputToValue": new FormControl(null, Validators.required),
      "m_wholeDate": new FormControl(null, Validators.required),
      "m_startDate": new FormControl(null, Validators.required),
      "m_endDate": new FormControl(null, Validators.required),
    })
  }

  getControls() {
    return (this.poForm.get('items') as FormArray).controls;
  }

  wholeDate: any;
  startDate: any;
  endDate: any;
  multiData: any;
  finalArray: any = [];
  selfieldType: any = '';
  public searchInputValue: any = '';
  searchInputToValue: any = '';
  searchInputFromValue: any = '';
  fetchDataByMultiFiltered() {
    this.multiData = this.poForm.value.items;
    let dataSource: any = this.sampleResponse.data;

    this.multiData.forEach((element: { m_searchKey: any; m_selSearchName: any; m_searchFieldType: any; m_searchInputValue: any; }) => {
      this.finalArray = [];
      let mainKey = element.m_searchKey;
      let searchType = element.m_selSearchName;
      this.selfieldType = element.m_searchFieldType;
      this.searchInputValue = element.m_searchInputValue;

      if (this.selfieldType == 'date') {
        switch (searchType) {

          case "wholeSearch":
            dataSource.map((itm: any) => {
              if (moment(itm[mainKey]).format('YYYY-MM-DD') == moment(this.wholeDate).format('YYYY-MM-DD')) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;

          case 'greterthan':
            dataSource.map((itm: any) => {
              if (moment(itm[mainKey]).format('YYYY-MM-DD') > moment(this.wholeDate).format('YYYY-MM-DD')) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;
          case 'greterthanorequal':
            dataSource.map((itm: any) => {
              if (moment(itm[mainKey]).format('YYYY-MM-DD') >= moment(this.wholeDate).format('YYYY-MM-DD')) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;

          case 'lessthan':
            dataSource.map((itm: any) => {
              if (moment(itm[mainKey]).format('YYYY-MM-DD') < moment(this.wholeDate).format('YYYY-MM-DD')) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;
          case 'lessthanorequal':
            dataSource.map((itm: any) => {
              if (moment(itm[mainKey]).format('YYYY-MM-DD') <= moment(this.wholeDate).format('YYYY-MM-DD')) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;

          case 'between':
            dataSource.map((itm: any) => {
              if (moment(itm[mainKey]).format('YYYY-MM-DD') > moment(this.startDate).format('YYYY-MM-DD') && moment(itm[mainKey]).format('YYYY-MM-DD') < moment(this.endDate).format('YYYY-MM-DD')) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;

        }

      } else {
        switch (searchType) {

          case "wholeSearch":
            dataSource.map((itm: any) => {
              if (itm[mainKey] == this.searchInputValue) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;
          case 'greterthan':
            dataSource.map((itm: any) => {
              if (itm[mainKey] > this.searchInputValue) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;
          case 'greterthanorequal':
            dataSource.map((itm: any) => {
              if (itm[mainKey] >= this.searchInputValue) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;
          case 'lessthan':
            dataSource.map((itm: any) => {
              if (itm[mainKey] < this.searchInputValue) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;
          case 'lessthanorequal':
            dataSource.map((itm: any) => {
              if (itm[mainKey] <= this.searchInputValue) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;
          case 'between':
            dataSource.map((itm: any) => {
              if (itm[mainKey] > this.searchInputFromValue && itm[mainKey] < this.searchInputToValue) {
                this.finalArray.push(itm)
              }
            });
            this.dataSet();
            break;
        }
      }

      dataSource = this.finalArray;
    });
  }


  dataSet() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.finalArray);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 500);
    }, 2000);
  }

  multiSelectedSearchType(sObj: any, index: any) {
    this.poForm.value.items[index].m_selSearchName = sObj.searchType;
  }

}
