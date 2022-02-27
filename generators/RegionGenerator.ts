import { Name } from "./NameGenerator";
import { getRandomNumberInRange } from "../utils";
import { RegionParams, Reign } from "../types/interfaces";
import { Person } from "./PersonGenerator";
import { ReignStart } from "./events/ReignStart";
import { ReignEnd } from "./events/ReignEnd";
import { DateGenerator } from "./DateGenerator";

export class Region {
    id:number; 
    name: string;
    climate: string;
    population: number;
    reigns: Reign[];

    public constructor({regionId, lifespan}: RegionParams) {
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

    private generateReigns(lifespan:number): Reign[] {
        const reigns = [];
        for (let years = 0; years < lifespan; years++) {
            for (let months = 0; months < 12; months++) {
                for (let days = 0; days < 30; days++) {
                    const rulerId = people.length; 
                    new Person(rulerId); 
                    const dateStart = new ReignStart({ year: years, month: months, day: days }, rulerId, this.id).date;
                    const duration = DateGenerator.randomDate(1, 60); 
                    const dateEnd = new ReignEnd(DateGenerator.addDates(dateStart, duration), rulerId, this.id).date;
                    const reignObj: Reign = {
                        rulerId,
                        dateStart,
                        dateEnd,
                        duration,
                    }
                    reigns.push(reignObj)
                }
            }
        }

        return reigns;
    }

}