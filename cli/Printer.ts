import clc from "cli-color";
import { EventDate, Reign } from "../types/interfaces";
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
        log(`It is made of ${world?.nbOfRegions} regions.`);
        this.printAllRegions();
    }

    public printAllRegions(): void {
        world?.regions.forEach((e:[], i:number) => {
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

    public printReigns(reigns: Reign[]):void{
        log(`\n${clc.bold("Rulers")} : `);
        reigns.forEach((e)=>{
            this.printPersonLight(e.rulerId);
            log(`# Start of reign : ${this.formatDate(e.dateStart)}`)
            if(e.dateEnd){
                log(`# End of reign : ${this.formatDate(e.dateEnd)}`)
            }
        });
    }

    // public printTimeline(): void {
    //     log(timeline.years);
    //     timeline.years.forEach((year:[][][], i:number) => {
    //         year.forEach((month, j) => {
    //             month.forEach((week, k) => {
    //                 week.forEach((day, l) => {
    //                     log(clc.blue(`Day ${l + 1} - Week ${k+1} - Month ${j+1} -  Year ${i+1}: `));
    //                     log(day);
    //                 });
    //             });
    //         });
    //     });
    // }

    public printPersonLight(id:number):void{
        const person = people[id];
        log(`${clc.cyan(`[${id}] ${person.name}`)}`);
    }

    public printPersonDetails(id:number):void{
        const person = people[id];
        log(clc.cyan(`[${id}] ${person.name}`));
        log(`Born : ${this.formatDate(person.birthday)}`)
        log(`Death : ${this.formatDate(person.death)}`)
    }

    private formatDate(date:EventDate):string{
        return `day ${date.day+1}, month ${date.month+1} in year ${date.year+1} `;
    }

    private formatPopulation(n: number): string {
        let string = n + "";
        for (let i = string.length; i >= 0; i -= 3) {
            string = string.slice(0, i) + " " + string.slice(i, string.length);
        }
        return string;
    }

}