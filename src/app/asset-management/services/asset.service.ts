import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/environments/endpoints';
import { IAsset } from '../interfaces/asset.interface';
import { BaseService } from 'src/app/shared/services/base.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService extends BaseService<IAsset> {

  constructor(http: HttpClient, private fb: FormBuilder, private sessionService: SessionService) {
    super(http, endpoints.assets);
  }


  public buildAssetForm(asset: IAsset): FormGroup {
    return this.fb.group({
      pkey: [asset && asset.pkey],
      customerId: [asset && asset.customerId || this.sessionService.customerId],
      assetUid: [asset && asset.assetUid],
      description: [asset && asset.description, Validators.required],
      machineName: [asset && asset.machineName, Validators.required],
      make: [asset && asset.make, Validators.required],
      serialNumber: [asset && asset.serialNumber, Validators.required],
      modelNumber: [asset && asset.modelNumber, Validators.required],
      installedDate: [asset && asset.installedDate || new Date(), Validators.required],
      warrantyExpiry: [asset && asset.warrantyExpiry || new Date(), Validators.required],
      isActive: [asset && asset.isActive],
      location: [asset && asset.location, Validators.required],
      powerRating: [asset && asset.powerRating, Validators.required],
      supplier: [asset && asset.supplier, Validators.required],
      category: [asset && asset.category, Validators.required],
      criticality: [asset && asset.criticality, Validators.required]
    });
  }
}
