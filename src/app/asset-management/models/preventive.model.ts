export class Preventive {
    pkey: number;
    assetFkey: number;
    customerId: number;
    machineName: string;
    location: string;
    checkUp: string;
    nextScheduledDate: string;
    lastWorkedOn: string;
    lastBreakDown: string;

    constructor(data?: Preventive) {
        this.assetFkey = data && data.assetFkey || null;
        this.customerId = data && data.customerId || null;
        this.machineName = data && data.machineName || null;
        this.location = data && data.location || null;
        this.checkUp = data && data.checkUp || null;
        this.nextScheduledDate = data && data.nextScheduledDate || null;
        this.lastWorkedOn = data && data.lastWorkedOn || null;
        this.lastBreakDown = data && data.lastBreakDown || null;
    }
}
