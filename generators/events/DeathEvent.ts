import { DateGenerator } from "../DateGenerator";
import { HistoricEvent } from "./EventGenerator";
import { DeathEventParams, EventDate } from "../../types/interfaces";

export class DeathEvent extends HistoricEvent {
    personId: number;
    date: EventDate;
    eventType = "death";


    public constructor({ personId, condition }: DeathEventParams) {
        super();
        this.personId = personId;
        const max = condition.type === "birth" ? condition.cond + 110 : condition.cond + 80;
        this.date = DateGenerator.randomDate(condition.cond, max);
        const { year, month, day } = this.date;
        if (year < 100 && year >= 0) {
            timeline[year][month][day].push(this);
        }
    }
}