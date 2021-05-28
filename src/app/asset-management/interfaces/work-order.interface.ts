export interface IWorkOrder {
    pKey: number;
    workOrderNumber: string;
    createdDate: string;
    workType: string;
    assetFKey: number;
    customerId: number;
    machineName: string;
    location: string;
    workNature: string;
    scope: string;
    vendorName: string;
    completedDate: string;
    approvedBy: string;
    duration: string;
    createdBy: string;
    status: number;
    cost: string;
    quotationNumber: string;
    quotationDate: string;
    manHrs: string;
}
