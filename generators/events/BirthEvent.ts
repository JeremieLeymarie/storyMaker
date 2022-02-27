import { EventDate } from "../../types/interfaces";
import { DateGenerator } from "../DateGenerator";
import { HistoricEvent } from "./EventGenerator";

export class BirthEvent extends HistoricEvent {
    personId: number;
    date: EventDate;
    eventType="birth"

    public constructor(personId: number) {
        super();
        this.date = DateGenerator.randomDate(); 
        this.personId = personId;
        timeline[this.date.year][this.date.month][this.date.day] = this; 
    }
} 
