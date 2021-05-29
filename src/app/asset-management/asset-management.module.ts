import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsResolver, BreakdownsResolver, PreventivesResolver, WorkOrdersResolver } from './asset-management.resolver';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AssetCateoriesResolver } from './resolvers/asset-categories.resolver';
import { AssetsComponent } from './components/assets/assets.component';
import { BreakdownsComponent, BreakdownDialog } from './components/breakdowns/breakdowns.component';
import { PreventivesComponent, PreventiveDialog } from './components/preventives/preventives.component';
import { WorkOrdersComponent, WorkOrderDialog } from './components/work-orders/work-orders.component';
import { TableComponentModule } from '../common/data-table/data-table.module';

export const routes = [
  {
    path: '',
    redirectTo: 'assets'
  },
  {
    path: 'assets',
    component: AssetsComponent,
    resolve: {
      assets: AssetsResolver,
      assetCategories: AssetCateoriesResolver
    }
  },
  {
    path: 'breakdowns',
    component: BreakdownsComponent,
    resolve: {
      breakdowns: BreakdownsResolver,
      assetCategories: AssetCateoriesResolver
    }
  },
  {
    path: 'preventives',
    component: PreventivesComponent,
    resolve: {
      preventives: PreventivesResolver,
      assetCategories: AssetCateoriesResolver
    }
  },
  {
    path: 'work-orders',
    component: WorkOrdersComponent,
    resolve: {
      workOrders: WorkOrdersResolver,
      assetCategories: AssetCateoriesResolver
    }
  }
];

@NgModule({
  declarations: [
    AssetsComponent,
    BreakdownsComponent,
    BreakdownDialog,
    PreventivesComponent,
    PreventiveDialog,
    WorkOrdersComponent,
    WorkOrderDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    TableComponentModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AssetsResolver,
    BreakdownsResolver,
    PreventivesResolver,
    WorkOrdersResolver
  ],
  entryComponents: [BreakdownDialog,
    WorkOrderDialog,
    PreventiveDialog
  ]
})
export class AssetManagementModule { }
