import { endpoints } from 'src/environments/endpoints';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAssetCategory } from '../interfaces/asset-category.interface';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AssetManagementService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  public getAssetCategories(): Observable<Array<IAssetCategory>> {
    const url = `${endpoints.assetCategories}${this.sessionService.customerId}`;
    return this.http.get<Array<IAssetCategory>>(url);
  }

  public getAssetsByCategory(id: string): Observable<Array<any>> {
    const url = `${endpoints.assetsByCategory}${id}`;
    return this.http.get<Array<any>>(url);
  }

  public addAssetCategory(assetCategory: IAssetCategory): Observable<any> {
    return this.http.post<IAssetCategory>(endpoints.addAssetCategory, assetCategory);
  }

  public updateAssetCategory(assetCategory: IAssetCategory): Observable<any> {
    const url = `${endpoints.updateAssetCategory}?key=${assetCategory.pKey}`;
    return this.http.put<IAssetCategory>(url, assetCategory);
  }

  public deleteAssetCategory(pkey: string): Observable<any> {
    const url = `${endpoints.deleteAssetCategory}${pkey}`;
    return this.http.delete<IAssetCategory>(url);
  }
}
