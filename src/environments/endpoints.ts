import { environment } from './environment';

export const endpoints = {
    assetMgt: `${environment.amtServer}`,
    assetsHeaderItems: `${environment.server}/TotalCount?CustomerId=`,

    assetCategories: `${environment.server}/Category?CustomerId=`,
    addAssetCategory: `${environment.server}/Category/api/create`,
    updateAssetCategory: `${environment.server}/Category/api/UpdateAsset`,
    deleteAssetCategory: `${environment.server}/Category/api/Delete?categoryKey=`,

    assets: `${environment.server}/Asset/api/Asset`,
    assetsByCategory: `${environment.server}/Asset/api/Category/Asset?categoryId=`,
    addAsset: `${environment.server}/Asset/api/Asset/Create`,
    updateAsset: `${environment.server}/Asset/api/Asset/Update?key=`,
    deleteAsset: `${environment.server}/Asset/api/Asset/Delete?key=`,

    workorders: `${environment.server}/WorkOrder/api/WorkOrder`,
    addWorkorder: `${environment.server}/WorkOrder/api/WorkOrder/Create`,
    updateWorkorder: `${environment.server}/WorkOrder/api/WorkOrder/Update`,
    deleteWorkorder: `${environment.server}/WorkOrder/api/WorkOrder/Delete/`,

    breakdowns: `${environment.server}/BreakDown/api/BreakDown`,
    createBreakdown: `${environment.server}/BreakDown/api/Breakdown/Create`,
    updateBreakdown: `${environment.server}/BreakDown/api/Breakdown/Update?key=`,
    deleteBreakdown: `${environment.server}/BreakDown/api/BreakDown/Delete?key=`,

    preventives: `${environment.server}/Preventive/api/Preventive`,
    addPreventive: `${environment.server}/Preventive/api/Preventive/Create`,
    updatePreventive: `${environment.server}/Preventive/api/Preventive/Update?key=`,
    deletePreventive: `${environment.server}/Preventive/api/Preventive/Delete?key=`,
};
