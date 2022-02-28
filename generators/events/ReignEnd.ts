import { EventDate } from "../../types/interfaces";

export class ReignEnd {
    date: EventDate;
    rulerId: number;
    regionId: number;
    eventType = "reignEnd";

    constructor(date: EventDate, rulerId: number, regionId: number) {
        this.date = date;
        this.rulerId = rulerId;
        this.regionId = regionId;
        const { year, month, day } = this.date;
        if (year < 100 && year >= 0) {
            timeline[year][month][day].push(this);
        }
    }
}