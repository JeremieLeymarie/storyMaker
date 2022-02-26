import { World } from "./WorldGenerator";
import * as fs from 'fs';
import * as path from 'path';
import clc from "cli-color";
import { Timeline } from "./Timeline";
const log = console.log;

export class Printer {
    world: World;
    timeline: Timeline;

    constructor(world: World, timeline: Timeline) {
        this.world = world;
        this.timeline = timeline;
    }

    public printWorld(): void {
        const welcomeStr = "Welcome to the world of " + this.world?.name;
        let dashes = "";
        for (let i = 0; i < welcomeStr.length; i++) {
            dashes += "-";
        }
        log(clc.green(dashes))
        log(clc.green(welcomeStr));
        log(clc.green(dashes))
        log(`It is made of ${this.world?.nbOfRegions} regions.`);
        this.printAllRegions();
    }

    public printAllRegions(): void {
        this.world?.regions.forEach((e, i) => {
            log(clc.magentaBright(`[${i}] ${this.world?.regions[i].name}`));
        });
    }

    public printRegion(i: number): void {
        if (i >= 0 && i <= this.world?.regions.length) {
            const region = this.world?.regions[i]
            log(clc.magentaBright(`[${i}] ${region.name}`));
            log(`- Population : ${this.formatPopulation(region.population)}`)
            log(`- Ruler : ${clc.cyan(region.ruler.name)}`)
            log(`- Climate : ${region.climate}`)
        }
        else {
            log(clc.red("Action cannot go through. Try something else"));
        }

    }

    public printTimeline(): void {
        log(this.timeline.years);
        this.timeline.years.forEach((year, i) => {
            year.forEach((month, j) => {
                month.forEach((week, k) => {
                    week.forEach((day, l) => {
                        log(clc.blue(`Day ${l + 1} - Week ${k+1} - Month ${j+1} -  Year ${i+1}: `));
                        log(day);
                    });
                });
            });
        });
    }

    private formatPopulation(n: number): string {
        let string = n + "";
        for (let i = string.length; i >= 0; i -= 3) {
            string = string.slice(0, i) + " " + string.slice(i, string.length);
        }
        return string;
    }

}