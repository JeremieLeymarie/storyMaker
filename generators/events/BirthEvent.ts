import { EventDate } from "../../types/interfaces";
import { DateGenerator } from "../DateGenerator";
import { Person } from "../PersonGenerator";
import { HistoricEvent } from "./EventGenerator";

export class BirthEvent extends HistoricEvent {
    personId: number;
    date: EventDate;

    public constructor(personId: number) {
        super();
        this.date = DateGenerator.randomDate(); 
        this.personId = personId;
        timeline[this.date.year][this.date.month][this.date.day] = this; 
    }

   

} 
