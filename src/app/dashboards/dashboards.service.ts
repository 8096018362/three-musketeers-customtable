import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAssetCount } from '../interfaces/asset-management.interface';
import { endpoints } from 'src/environments/endpoints';
import { SessionService } from '../shared/services/session.service';

@Injectable()
export class DashboardsService {

  constructor(private http: HttpClient, private sessionService: SessionService) {}

  getItemsCount(): Observable<IAssetCount> {
    const url = `${endpoints.assetsHeaderItems}${this.sessionService.customerId}`;
    return this.http.get<IAssetCount>(url);
  }

  // ecommerce dashboard
  getRecentOrdersTableData(): Observable<any> {
    return this.http.get('/assets/data/ecommerce-dashboard/recent-orders-table.json');
  }

  getLatestTicketsTableData(): Observable<any> {
    return this.http.get('/assets/data/ecommerce-dashboard/latest-tickets-table.json');
  }

  // crm dashboard
  getLeadsTableData(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/leads-table.json');
  }

  getTopSellersData(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/top-sellers.json');
  }

  getLaggingSellersData(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/lagging-sellers.json');
  }

  getArticles(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/articles.json');
  }

  getTasks(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/tasks.json');
  }
}
