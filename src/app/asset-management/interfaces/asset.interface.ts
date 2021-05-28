export interface IAsset {
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
}
