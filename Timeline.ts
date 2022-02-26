import { getRandomNumberInRange } from "./utils";
import { BirthEvent } from "./events/BirthEvent";
import { DeathEvent } from "./events/DeathEvent";
import { BattleEvent } from "./events/BattleEvent";
import { TimelineParams } from "./interfaces";
import { World } from "./WorldGenerator";
const eventTypes = [BirthEvent, DeathEvent, BattleEvent];

export class Timeline {
    years;
    world:World;

    public constructor({ nbOfYears = 1, world }: TimelineParams) {
        this.years = this.generateYears(nbOfYears);
        this.world = world; 
    }

    private generateYears(n: number) {
        const years = [];
        for (let i = 0; i < n; i++) {
            years.push(this.generateMonth());
        }
        return years;
    }

    private generateMonth() {
        const months = [];
        for (let i = 0; i < 4; i++) {
            months.push(this.generateWeek());
        }
        return months;
    }

    private generateWeek() {
        const week = [];
        for (let i = 0; i < 7; i++) {
            week.push(this.generateDay());
        }
        return week;
    }

    private generateDay() {
        const nbOfEvents = getRandomNumberInRange(0, 3);
        const day = [];
        for (let i = 0; i < nbOfEvents; i++) {
            const randEvent = eventTypes[getRandomNumberInRange(0, eventTypes.length - 1)];
            day.push(new randEvent(this.world))
        }
        return day;
    }


}