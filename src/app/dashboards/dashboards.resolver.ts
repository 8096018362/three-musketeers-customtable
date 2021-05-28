import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DashboardsService } from './dashboards.service';
import { forkJoin, Observable } from 'rxjs';
import { IAssetCount } from '../interfaces/asset-management.interface';

@Injectable()
export class EcommerceDashboardResolver implements Resolve<any> {

  constructor(private dashboardService: DashboardsService) { }

  resolve() {
    return new Promise((resolve, reject) => {
      forkJoin([
        this.dashboardService.getRecentOrdersTableData(),
        this.dashboardService.getLatestTicketsTableData()
      ])
        .subscribe((data: any) => {
          return resolve({
            recentOrdersData: data[0],
            latestTicketsData: data[1]
          });
        });
    });
  }
}
@Injectable()
export class CrmDashboardResolver implements Resolve<any> {

  constructor(private dashboardService: DashboardsService) { }

  resolve() {
    return new Promise((resolve, reject) => {
      forkJoin([
        this.dashboardService.getLeadsTableData(),
        this.dashboardService.getTopSellersData(),
        this.dashboardService.getLaggingSellersData(),
        this.dashboardService.getArticles(),
        this.dashboardService.getTasks()
      ])
        .subscribe((data: any) => {
          return resolve({
            leadsData: data[0],
            topSellers: data[1],
            laggingSellers: data[2],
            articles: data[3],
            tasks: data[4]
          });
        });
    });
  }
}

@Injectable()
export class AssetManagementDashboardResolver implements Resolve<IAssetCount> {
  constructor(private service: DashboardsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    //return this.service.getItemsCount();
    return 0;
  }
}
