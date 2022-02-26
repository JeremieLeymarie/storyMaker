import { Person } from "../PersonGenerator";
import { Region } from "../RegionGenerator";
import { getRandomNumberInRange } from "../utils";
import { HistoricEvent } from "./EventGenerator";
import { world } from "../index";
console.log(world);

export class BattleEvent extends HistoricEvent {
    belligerants: Region[];
    durationInDays: number;
    winnerIndex: number;
    
    public constructor() {
        super();
        this.belligerants = this.generateBelligerants();
        this.durationInDays = getRandomNumberInRange(1, 500);
        this.winnerIndex = getRandomNumberInRange(0, this.belligerants.length);
    }

    private generateBelligerants(): Region[] {
        const nbOfBelligerants = getRandomNumberInRange(2, 4);
        const belligerants:Region[] = [];
        for (let i = 0; i < nbOfBelligerants; i++) {
            const person = world?.regions[getRandomNumberInRange(0, world.nbOfRegions-1)];
            belligerants.push(person);
        }

        return belligerants;
    }
}