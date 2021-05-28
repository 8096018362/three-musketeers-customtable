import { IAsset } from '../interfaces/asset.interface';

export class Asset implements IAsset {
    pkey: number;
    assetUid: string;
    customerId: number;
    description: string;
    machineName: string;
    make: string;
    serialNumber: string;
    modelNumber: string;
    installedDate: string;
    warrantyExpiry: string;
    isActive: boolean;
    location: string;
    powerRating: string;
    supplier: string;
    category: string;
    criticality: number;

    constructor(asset?: IAsset) {
        this.pkey = asset && asset.pkey || null;
        this.assetUid = asset && asset.assetUid || null;
        this.customerId = asset && asset.customerId || null;
        this.description = asset && asset.description || null;
        this.machineName = asset && asset.machineName || null;
        this.make = asset && asset.make || null;
        this.serialNumber = asset && asset.serialNumber || null;
        this.modelNumber = asset && asset.modelNumber || null;
        this.installedDate = asset && asset.installedDate || null;
        this.warrantyExpiry = asset && asset.warrantyExpiry || null;
        this.isActive = asset && asset.isActive || false;
        this.location = asset && asset.location || null;
        this.powerRating = asset && asset.powerRating || null;
        this.supplier = asset && asset.supplier || null;
        this.category = asset && asset.category || null;
        this.criticality = asset && asset.criticality || null;
    }
}
