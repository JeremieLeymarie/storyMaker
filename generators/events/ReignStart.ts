import { EventDate } from "../../types/interfaces";

export class ReignStart {
    date: EventDate;
    rulerId: number;
    regionId: number;
    eventType: string = "reignStart";
    description: string = "";
    reignType: string = "";

    constructor(date: EventDate, rulerId: number, regionId: number) {
        this.date = date;
        this.rulerId = rulerId;
        this.regionId = regionId;
        const { year, month, day } = this.date;
        if (year >= 0)
            timeline[year][month][day].push(this);
    }

    public generateDescription() {
        const types = ["election", "coup", "revolution" ]
    }
}