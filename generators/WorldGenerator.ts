import { WorldGeneratorParams } from "../types/interfaces";
import { getRandomNumberInRange } from "../utils";
import { Region } from "./RegionGenerator";
import { Name } from "./NameGenerator";

export class World {
    nbOfRegions: number;
    name: string;
    regions: Region[];
    lifeSpan: number;

    constructor({ nbOfRegions = undefined, lifeSpan = 100 }: WorldGeneratorParams) {
        this.lifeSpan = lifeSpan;
        this.nbOfRegions = nbOfRegions ? nbOfRegions : getRandomNumberInRange(10, 100);
        this.name = new Name({}).generateName();
        this.regions = [];
        this.generateRegions();
    }

    private generateRegions() {
        for (let i = 0; i < this.nbOfRegions; i++) {
            this.regions.push(new Region({ lifespan: this.lifeSpan, regionId: i }));
        }
    }

    public save() {

    }
}