import { DateGenerator } from "../DateGenerator";
import { HistoricEvent } from "./EventGenerator";
import { DeathEventParams, EventDate } from "../../types/interfaces";

export class DeathEvent extends HistoricEvent {
    personId: number;
    date: EventDate;
    eventType = "death";


    public constructor({ personId, birth }: DeathEventParams) {
        super();
        this.personId = personId;
        this.date = DateGenerator.generateTimeOfDeath(birth)
        const { year, month, day } = this.date;
        if (year < 100 && year >= 0) {
            timeline[year][month][day].push(this);
        }
    }
}