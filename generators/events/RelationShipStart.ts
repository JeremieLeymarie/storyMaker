import { EventDate } from "../../types/interfaces";
import { DateGenerator } from "../DateGenerator";
import { Person } from "../PersonGenerator"

export default class RelationShipStart {
    people: number[];
    date: EventDate;
    eventType = "relationShipStart";

    public constructor(personA: Person, personB: Person) {
        this.people = [personA.id, personB.id];
        const minDate: number = personA.birthday.year < personB.birthday.year ? personB.birthday.year : personA.birthday.year;
        let maxDate: number;

        if (personA.death && personB.death) {
            maxDate = personA.death.year < personB.death.year ? personA.death.year - 1 : personB.death.year - 1;
        }
        else if (personA.death || personB.death) {
            maxDate = personA.death ? personA.death.year - 1 : personB.death.year - 1
        }
        else {
            maxDate = 100;
        }
        console.log("max date " + maxDate);
        this.date = DateGenerator.randomDate(minDate + 18, maxDate)

        const { year, month, day } = this.date;
        if (year >= 0 && year < 100) {
            timeline[year][month][day].push(this);
        }
    }
}