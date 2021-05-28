import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AssetService } from './services/asset.service';
import { IAsset } from './interfaces/asset.interface';
import { IWorkOrder } from './interfaces/work-order.interface';
import { WorkorderService } from './services/workorder.service';
import { IBreakdown } from './interfaces/breakdown.interface';
import { BreakdownService } from './services/breakdown.service';
import { IPreventive } from './interfaces/preventive.interface';
import { PreventiveService } from './services/preventive.service';

@Injectable()
export class AssetsResolver implements Resolve<Array<IAsset>> {

  constructor(private service: AssetService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.getItems();
  }
}

@Injectable()
export class WorkOrdersResolver implements Resolve<Array<IWorkOrder>> {

  constructor(private service: WorkorderService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.getItems();
  }
}

@Injectable()
export class BreakdownsResolver implements Resolve<Array<IBreakdown>> {

  constructor(private service: BreakdownService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.getItems();
  }
}

@Injectable()
export class PreventivesResolver implements Resolve<Array<IPreventive>> {

  constructor(private service: PreventiveService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.getItems();
  }
}
