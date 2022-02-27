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
        if (this.date.year < 100)
            timeline[this.date.year][this.date.month][this.date.day] = this;
    }
}