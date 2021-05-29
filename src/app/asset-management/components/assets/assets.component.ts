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
  originalData = [
    { "pKey": 1, "assetUid": "ast128765", "customerId": 12345, "description": "hello123", "machineName": "caterpillar", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:10", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 2, "assetUid": "ast128766", "customerId": 12345, "description": "hello", "machineName": "JCB", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:51", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 3, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 5, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 5, "assetUid": "harshita", "customerId": 12345, "description": "123", "machineName": "harshitamachine", "make": "2020", "serialNumber": "string", "modelNumber": "string", "installedDate": "2019-06-30T04:33:24", "warrantyExpiry": "2019-06-30T04:33:24", "isActive": true, "location": "kondapur", "powerRating": "1", "supplier": "khandelwals", "category": 3, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 13, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 3, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 14, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 1, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 15, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab1", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 1, "assetUid": "ast128765", "customerId": 12345, "description": "hello123", "machineName": "caterpillar", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:10", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 2, "assetUid": "ast128766", "customerId": 12345, "description": "hello", "machineName": "JCB", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:51", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 3, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 5, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 5, "assetUid": "harshita", "customerId": 12345, "description": "123", "machineName": "harshitamachine", "make": "2020", "serialNumber": "string", "modelNumber": "string", "installedDate": "2019-06-30T04:33:24", "warrantyExpiry": "2019-06-30T04:33:24", "isActive": true, "location": "kondapur", "powerRating": "1", "supplier": "khandelwals", "category": 3, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 13, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 3, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 14, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 1, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 15, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab1", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 1, "assetUid": "ast128765", "customerId": 12345, "description": "hello123", "machineName": "caterpillar", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:10", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 2, "assetUid": "ast128766", "customerId": 12345, "description": "hello", "machineName": "JCB", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:51", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 3, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 5, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 5, "assetUid": "harshita", "customerId": 12345, "description": "123", "machineName": "harshitamachine", "make": "2020", "serialNumber": "string", "modelNumber": "string", "installedDate": "2019-06-30T04:33:24", "warrantyExpiry": "2019-06-30T04:33:24", "isActive": true, "location": "kondapur", "powerRating": "1", "supplier": "khandelwals", "category": 3, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 13, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 3, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 14, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 1, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 15, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab1", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 1, "assetUid": "ast128765", "customerId": 12345, "description": "hello123", "machineName": "caterpillar", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:10", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 2, "assetUid": "ast128766", "customerId": 12345, "description": "hello", "machineName": "JCB", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:51", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 3, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 5, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 5, "assetUid": "harshita", "customerId": 12345, "description": "123", "machineName": "harshitamachine", "make": "2020", "serialNumber": "string", "modelNumber": "string", "installedDate": "2019-06-30T04:33:24", "warrantyExpiry": "2019-06-30T04:33:24", "isActive": true, "location": "kondapur", "powerRating": "1", "supplier": "khandelwals", "category": 3, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 13, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 3, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 14, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 1, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 15, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab1", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 1, "assetUid": "ast128765", "customerId": 12345, "description": "hello123", "machineName": "caterpillar", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:10", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 2, "assetUid": "ast128766", "customerId": 12345, "description": "hello", "machineName": "JCB", "make": "2018", "serialNumber": "546yhgt9uy2", "modelNumber": "h343h8743h09j", "installedDate": "2019-06-02T16:59:51", "warrantyExpiry": "2021-12-25T10:30:50", "isActive": true, "location": "india", "powerRating": "2", "supplier": "TATA", "category": 1, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 3, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 5, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 5, "assetUid": "harshita", "customerId": 12345, "description": "123", "machineName": "harshitamachine", "make": "2020", "serialNumber": "string", "modelNumber": "string", "installedDate": "2019-06-30T04:33:24", "warrantyExpiry": "2019-06-30T04:33:24", "isActive": true, "location": "kondapur", "powerRating": "1", "supplier": "khandelwals", "category": 3, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 13, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 3, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 14, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 1, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }, { "pKey": 15, "assetUid": "jeet321", "customerId": 12345, "description": "this is an asset", "machineName": "JCB", "make": "2020", "serialNumber": "jjh76576", "modelNumber": "sdvdf4343", "installedDate": "2019-06-09T14:06:58", "warrantyExpiry": "2019-06-09T14:06:58", "isActive": true, "location": "Punjab1", "powerRating": "3", "supplier": "board manufacturer", "category": 2, "criticality": 2, "createdDate": "0001-01-01T00:00:00", "updatedDate": "0001-01-01T00:00:00" }
  ]

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false })
  sort!: MatSort;

  displayedColumns = [
    { value: 'machineName', header: 'Machine Name' },
    { value: 'description', header: 'Description' },
    { value: 'make', header: 'Make' },
    { value: 'serialNumber', header: 'serialNumber' },
    { value: 'modelNumber', header: 'modelNumber' },
    { value: 'installedDate', header: 'installedDate' },
    { value: 'warrantyExpiry', header: 'warrantyExpiry' },
    { value: 'location', header: 'location' },
    { value: 'powerRating', header: 'powerRating' },
    { value: 'supplier', header: 'supplier' },
    { value: 'category', header: 'category' },
    { value: 'criticality', header: 'criticality' },
    { value: 'pKey', header: 'pKey' }
  ];
  columnsToDisplay = [];


  ngOnInit() {
    setTimeout(() => {
      this.dataSource.data = this.originalData;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.columnsToDisplay = this.displayedColumns.map(x => x.value);
    }, 1000)
  }


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


}
