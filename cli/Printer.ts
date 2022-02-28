import clc from "cli-color";
import { EventDate, Reign } from "../types/interfaces";
import { PersonPrinter } from "./printers/PersonPrinter";
import { EventPrinter } from "./printers/EventPrinter";
import { DatePrinter } from "./printers/DatePrinter";
const log = console.log;

export class Printer {

    public printWorld(): void {
        const welcomeStr = "Welcome to the world of " + world?.name;
        let dashes = "";
        for (let i = 0; i < welcomeStr.length; i++) {
            dashes += "-";
        }
        log(clc.green(dashes))
        log(clc.green(welcomeStr));
        log(clc.green(dashes))
        log(`${clc.bold(people.length)} people, ${clc.bold(world.nbOfRegions)} regions and ${clc.bold(world.eventCount)} historic events have been generated. `)
        this.printAllRegions();
    }

    public printAllRegions(): void {
        world?.regions.forEach((e: [], i: number) => {
            log(clc.magentaBright(`[${i}] ${world?.regions[i].name}`));
        });
    }

    public printRegion(i: number): void {
        if (i >= 0 && i <= world?.regions.length) {
            const region = world?.regions[i]
            log(clc.magentaBright(`[${i}] ${region.name}`));
            log(`- Population : ${this.formatPopulation(region.population)}`)
            log(`- Climate : ${region.climate}`)
            this.printReigns(region.reigns);
        }
        else {
            log(clc.red("Action cannot go through. Try something else"));
        }
    }

    public printReigns(reigns: Reign[]): void {
        log(`\n${clc.bold("Rulers")} : `);
        reigns.forEach((e) => {
            PersonPrinter.printPersonLight(e.rulerId);
            log(`# Start of reign : ${DatePrinter.formatDate(e.dateStart)}`)
            if (e.dateEnd) {
                log(`# End of reign : ${DatePrinter.formatDate(e.dateEnd)}`)
            }
        });
    }

    public printTimeline(): void {
        const numberOfYears = 1;
        for (let i = 0; i < numberOfYears; i++) {
            for (let j = 0; j < timeline[i].length; j++) {
                for (let k = 0; k < timeline[i][j].length; k++) {
                    for (let l = 0; l < timeline[i][j][k].length; l++) {
                        EventPrinter.printEvent(timeline[i][j][k][l]);
                    }
                }
            }
        }

    }

    public printDay({ year, month, day }: EventDate): void {
        const d = [...timeline[year][month][day]];
        if (d.length > 0) {
            for (let i = 0; i < d.length; i++) {
                EventPrinter.printEvent(d[i]);
            }
        }
        else {
            log(clc.yellow("Nothing interesting happened on this day"));
        }

    }


    private formatPopulation(n: number): string {
        let string = n + "";
        for (let i = string.length; i >= 0; i -= 3) {
            string = string.slice(0, i) + " " + string.slice(i, string.length);
        }
        return string;
    }

}