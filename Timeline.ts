import { getRandomNumberInRange } from "./utils";
import { BirthEvent } from "./events/BirthEvent";
import { DeathEvent } from "./events/DeathEvent";
import { BattleEvent } from "./events/BattleEvent";
const Birth = BirthEvent;
const Death = DeathEvent;
const Battle = BattleEvent;

export class Timeline {
    eventTypes: string[] = ["Battle", "Death", "Birth"];

    public constructor() {
        const week = this.generateWeek();
        console.log(week);
    }

    generateWeek() {
        const weeks = [];
        for (let i = 0; i < 7; i++) {
            weeks.push(this.generateDay());
        }
        return weeks;
    }

    generateDay() {
        const nbOfEvents = getRandomNumberInRange(0, 3);
        const day = [];
        for (let i = 0; i < nbOfEvents; i++) {
            const randEvent = this.eventTypes[getRandomNumberInRange(0, this.eventTypes.length-1)];
            const ev= (eval( "new " + randEvent + "()"));
            day.push(ev); 
        }

        return day;
    }
}