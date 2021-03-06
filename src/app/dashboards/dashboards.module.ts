import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceDashboardComponent } from './ecommerce-dashboard/ecommerce-dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// echarts - lib: https://github.com/xieziyu/ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardsService } from './dashboards.service';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { EcommerceDashboardResolver, CrmDashboardResolver, AssetManagementDashboardResolver } from './dashboards.resolver';
import { AssetManagementDashboardComponent } from './asset-management-dashboard/asset-management-dashboard.component';


import { TableComponentModule } from '../common/data-table/data-table.module';

export const dashboardRoutes = [
  {
    path: '',
    redirectTo: 'asset-management'
  },
  {
    path: 'ecommerce',
    component: EcommerceDashboardComponent,
    resolve: {
      data: EcommerceDashboardResolver
    }
  },
  {
    path: 'crm',
    component: CrmDashboardComponent,
    resolve: {
      data: CrmDashboardResolver
    }
  },
  {
    path: 'asset-management',
    component: AssetManagementDashboardComponent,
    resolve: {
      data: CrmDashboardResolver,
      dashBoardData: AssetManagementDashboardResolver
    }
  }
];

@NgModule({
  declarations: [
    EcommerceDashboardComponent,
    CrmDashboardComponent,
    AssetManagementDashboardComponent
  ],
  imports: [
    CommonModule,
    TableComponentModule,
    RouterModule.forChild(dashboardRoutes),
    NgxEchartsModule,
    SharedModule
  ],
  providers: [
    DashboardsService,
    EcommerceDashboardResolver,
    CrmDashboardResolver,
    AssetManagementDashboardResolver
  ]
})
export class DashboardsModule { }
