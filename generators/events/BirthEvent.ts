import { BirthDeathParams, EventDate } from "../../types/interfaces";
import { DateGenerator } from "../DateGenerator";
import { HistoricEvent } from "./EventGenerator";

export class BirthEvent extends HistoricEvent {
    personId: number;
    date: EventDate;
    eventType = "birth"

    public constructor({ personId, condition }: BirthDeathParams) {
        super();
        if (condition) {
            this.date = DateGenerator.randomDate(condition.min, condition.max);
        }
        else {
            this.date = DateGenerator.randomDate();
        }
        this.personId = personId;
        const { year, month, day } = this.date;
        if (year >= 0)
            timeline[year][month][day].push(this);

    }
} 
