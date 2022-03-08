import { EventDate } from "../../types/interfaces";
import { DateGenerator } from "../DateGenerator";
import { Person } from "../PersonGenerator"

export default class RelationShipStart {
    people: Person[];
    date: EventDate;

    public constructor(personA: Person, personB: Person) {
        this.people = [personA, personB];
        const minDate: number = personA.birthday.year < personB.birthday.year ? personB.birthday.year : personA.birthday.year;
        let maxDate: number;

        if (personA.death && personB.death) {
            maxDate = personA.death.year < personB.death.year ? personB.death.year - 1 : personA.death.year - 1;
        }
        else if (personA.death || personB.death) {
            maxDate = personA.death ? personA.death.year - 1 : personB.death.year - 1
        }
        else {
            maxDate = 100;
        }
        this.date = DateGenerator.randomDate(minDate + 18, maxDate)

        const {year, month, day} = this.date; 
        if(year >= 0 && year <100){
            timeline[year][month][day].push(this); 
        }
    }
}