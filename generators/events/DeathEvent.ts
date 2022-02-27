import { DateGenerator } from "../DateGenerator";
import { HistoricEvent } from "./EventGenerator";
import { DeathEventParams, EventDate } from "../../types/interfaces";

export class DeathEvent extends HistoricEvent {
    personId: number;
    date : EventDate;

    public constructor({personId, birth}:DeathEventParams) {
        super();
        this.personId = personId;
        this.date = DateGenerator.generateTimeOfDeath(birth)
        timeline[this.date.year][this.date.month][this.date.day] = this; 
    }
}