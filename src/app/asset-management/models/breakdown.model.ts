import { IBreakdown } from './../interfaces/breakdown.interface';

export class Breakdown implements IBreakdown {
    pKey: number;
    assetFKey: number;
    customerId: number;
    machineName: string;
    location: string;
    breakDownDetails: string;
    reportedDate: string;
    rectifiedDate: string;
    workOrderNumber: string;
    downTimeDuration: string;

    constructor(breakdown?: IBreakdown) {
        this.assetFKey = breakdown && breakdown.assetFKey || null;
        this.customerId = breakdown && breakdown.customerId || null;
        this.machineName = breakdown && breakdown.machineName || null;
        this.location = breakdown && breakdown.location || null;
        this.breakDownDetails = breakdown && breakdown.breakDownDetails || null;
        this.reportedDate = breakdown && breakdown.reportedDate || null;
        this.rectifiedDate = breakdown && breakdown.rectifiedDate || null;
        this.workOrderNumber = breakdown && breakdown.workOrderNumber || null;
        this.downTimeDuration = breakdown && breakdown.downTimeDuration || null;
    }
}
