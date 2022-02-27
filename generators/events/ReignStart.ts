import { EventDate } from "../../types/interfaces";

export class ReignStart {
    date: EventDate;
    rulerId: number;
    regionId: number;
    eventType = "reignStart";

    constructor(date: EventDate, rulerId: number, regionId: number) {
        this.date = date;
        this.rulerId = rulerId;
        this.regionId = regionId;
        const { year, month, day } = this.date;
        timeline[year][month][day].push(this);
    }
}