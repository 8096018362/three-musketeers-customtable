import { AssetManagementService } from '../services/asset-management.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IAssetCategory } from '../interfaces/asset-category.interface';

@Injectable({ providedIn: 'root' })
export class AssetCateoriesResolver implements Resolve<Array<IAssetCategory>> {
  constructor(private service: AssetManagementService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.getAssetCategories();
  }
}
