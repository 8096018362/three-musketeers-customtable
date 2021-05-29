import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  dataSource: any = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  displayedColumns = [];
  columnsToDisplay = [];


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

}
