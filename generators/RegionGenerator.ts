import { Name } from "./NameGenerator";
import { getRandomNumberInRange } from "../utils";
import { EventDate, RegionParams, Reign, RulerRole } from "../types/interfaces";
import { Person } from "./PersonGenerator";
import { ReignStart } from "./events/ReignStart";
import { ReignEnd } from "./events/ReignEnd";
import { DateGenerator } from "./DateGenerator";

export class Region {
    id: number;
    name: string;
    climate: string;
    population: number;
    reigns: Reign[];

    public constructor({ regionId, lifespan }: RegionParams) {
        this.id = regionId;
        this.name = new Name({}).generateName();
        this.climate = this.generateClimate();
        this.population = getRandomNumberInRange(1000, 10000000);
        this.reigns = this.generateReigns(lifespan);
    }

    private generateClimate(): string {
        const climates = ["tropical", "dry", "temperate", "continental", "polar"];
        return climates[Math.floor(Math.random() * climates.length)];
    }

    private generateReigns(lifespan: number): Reign[] {
        /*
            - Generate ReignStart date between the year -20 years and the year (in the loops) 
            - Generate Ruler born between 50 & 18 years before the reignStart date
            - Generate reign duration between 
        
        */
        const reigns = [];
        for (let years = 0; years < lifespan - 1; years++) {
            for (let months = 0; months < 12 && years < lifespan - 1; months++) {
                for (let days = 0; days < 30 && years < lifespan - 1 && months < 120; days++) {
                    const rulerId = people.length;
                    let reignStartDate: EventDate;
                    if (years === 0) {
                        const dateStart = DateGenerator.randomDate(-20, years);
                        reignStartDate = new ReignStart(dateStart, rulerId, this.id,).date;
                    }
                    else {
                        reignStartDate = new ReignStart({ year: years, month: months, day: days }, rulerId, this.id,).date;
                    }
                    const role:RulerRole = {
                        type:"ruler", 
                        start : reignStartDate,
                        regionId:this.id,
                    }
                    const ruler = new Person({ id: rulerId, role, birthConditions: { min: reignStartDate.year - 50, max: reignStartDate.year - 15 }, deathConditions: { min: reignStartDate.year, max: 1500 } });
                    let end: EventDate;
                    if (ruler.death) end = DateGenerator.randomDate(reignStartDate.year + 1, ruler.death.year - 1);
                    else end = DateGenerator.randomDate(reignStartDate.year + 1, 60);
                    const dateEnd = end.year < lifespan ? new ReignEnd(end, rulerId, this.id).date : false;
                    ruler.role.end = dateEnd;
                    const duration = dateEnd ? DateGenerator.substractDates(dateEnd, reignStartDate) : "current";
                    const reignObj: Reign = { rulerId, dateStart: reignStartDate, dateEnd, duration }
                    years = end.year;
                    months = end.month;
                    days = end.day;
                    reigns.push(reignObj)
                }
            }
        }
        return reigns;
    }



}