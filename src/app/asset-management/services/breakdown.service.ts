import { BaseService } from 'src/app/shared/services/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/environments/endpoints';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IBreakdown } from '../interfaces/breakdown.interface';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class BreakdownService extends BaseService<IBreakdown> {

  constructor(http: HttpClient, private fb: FormBuilder, private sessionService: SessionService) {
    super(http, endpoints.breakdowns);
  }

  buildForm(breakdown: IBreakdown): FormGroup {
    return this.fb.group({
      assetCategory: [null, breakdown.pKey ? null : Validators.required],
      pKey: [breakdown && breakdown.pKey],
      assetFKey: [breakdown && breakdown.assetFKey],
      customerId: [breakdown && breakdown.customerId || this.sessionService.customerId],
      machineName: [breakdown && breakdown.machineName, Validators.required],
      location: [breakdown && breakdown.location, Validators.required],
      breakDownDetails: [breakdown && breakdown.breakDownDetails, Validators.required],
      reportedDate: [breakdown && breakdown.reportedDate || new Date(), Validators.required],
      rectifiedDate: [breakdown && breakdown.rectifiedDate || new Date()],
      workOrderNumber: [breakdown && breakdown.workOrderNumber || '1234abc'],
      downTimeDuration: [breakdown && breakdown.downTimeDuration || '1 day'],
    });
  }
}
