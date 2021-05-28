import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { endpoints } from 'src/environments/endpoints';
import { IWorkOrder } from '../interfaces/work-order.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BaseService } from 'src/app/shared/services/base.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class WorkorderService extends BaseService<IWorkOrder> {

  constructor(http: HttpClient, private fb: FormBuilder, private sessionService: SessionService) {
    super(http, endpoints.workorders);
  }

  // deleteWorkOrder(id: string): Observable<any> {
  //   const url = `${endpoints.deleteWorkorder}${id}/12345`;
  //   return this.http.delete<IWorkOrder>(url);
  // }

  buildForm(model: IWorkOrder): FormGroup {
    return this.fb.group({
      assetCategory: [null, model && model.pKey ? null : Validators.required],
      pKey: [model && model.pKey],
      assetFKey: [model && model.assetFKey],
      customerId: [model && model.customerId || this.sessionService.customerId],
      machineName: [model && model.machineName, Validators.required],
      location: [model && model.location, Validators.required],
      workType: [model && model.workType],
      workNature: [model && model.workNature],
      scope: [model && model.scope],
      vendorName: [model && model.vendorName],
      completedDate: [model && model.completedDate || new Date()],
      approvedBy: [model && model.approvedBy],
      duration: [model && model.duration],
      createdBy: [model && model.createdBy],
      status: [model && model.status],
      cost: [model && model.cost],
      quotationNumber: [model && model.quotationNumber],
      quotationDate: [model && model.quotationDate || new Date()],
      manHrs: [model && model.manHrs],
    });
  }
}
