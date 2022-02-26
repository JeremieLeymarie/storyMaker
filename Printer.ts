import { World } from "./WorldGenerator";
import * as fs from 'fs';
import * as path from 'path';
import clc from "cli-color";
const log = console.log;

export class Printer {
    world: World | null;

    constructor() {
        this.world = null;
        try {
            const data = fs.readFileSync(path.join(__dirname, "./data/world.json"), 'utf8')
            this.world = JSON.parse(data);
        } catch (err) {
            console.log(err);
        }
    }

    public printWorld(): void {
        log(clc.green(`Welcome to the world of [${this.world?.name.toUpperCase()}] `));
        log(`It is made of ${this.world?.nbOfRegions} regions.`);
    }

    public printAllRegions(): void {
        this.world?.regions.forEach((e, i) => {
            this.printRegion(i);
        });
    }

    public printRegion(i:number):void{
        log(clc.magenta(this.world?.regions[i].name).toUpperCase() + ":\n");
    }

}