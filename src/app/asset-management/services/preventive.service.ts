import { BaseService } from 'src/app/shared/services/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { endpoints } from 'src/environments/endpoints';
import { IPreventive } from '../interfaces/preventive.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class PreventiveService extends BaseService<IPreventive> {

  constructor(http: HttpClient, private fb: FormBuilder, private sessionService: SessionService) {
    super(http, endpoints.preventives);
  }


  buildForm(model: IPreventive): FormGroup {
    return this.fb.group({
      assetCategory: [null, model && model.pkey ? null : Validators.required],
      pkey: [model && model.pkey || null],
      assetFkey: [model && model.assetFkey || null],
      customerId: [this.sessionService.customerId],
      machineName: [model && model.machineName || null, Validators.required],
      location: [model && model.location || null, Validators.required],
      checkUp: [model && model.checkUp || null, Validators.required],
      nextScheduledDate: [model && model.nextScheduledDate || new Date(), Validators.required],
      lastWorkedOn: [model && model.lastWorkedOn || new Date(), Validators.required],
      lastBreakDown: [model && model.lastBreakDown || new Date(), Validators.required]
    });
  }
}
