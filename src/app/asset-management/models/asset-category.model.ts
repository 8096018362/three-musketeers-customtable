import { IAssetCategory } from '../interfaces/asset-category.interface';

export class AssetCategory implements IAssetCategory {
    pKey?: number;
    categoryName: string;
    created?: string;
    updated?: string;
    user: any;
    customerId: number;

    constructor(data?: IAssetCategory) {
        this.categoryName = data && data.categoryName || null;
        this.user = data && data.user || null;
        this.customerId = data && data.customerId || null;
    }
}
