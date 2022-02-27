import { Name } from "./NameGenerator";
import { getRandomNumberInRange } from "../utils";
import { RegionParams, Reign } from "../types/interfaces";
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
        const reigns = [];
        for (let years = 0; years < lifespan - 1; years++) {
            for (let months = 0; months < 11 && years < lifespan - 1; months++) {
                for (let days = 0; days < 29 && years < lifespan - 1 && months < 12; days++) {
                    const rulerId = people.length;
                    new Person(rulerId);
                    const dateStart = new ReignStart({ year: years, month: months, day: days }, rulerId, this.id).date;
                    const duration = DateGenerator.randomDate(1, 60);
                    const end = DateGenerator.addDates(dateStart, duration);
                    const dateEnd = end.year < 100 ? new ReignEnd(end, rulerId, this.id).date : false;
                    const reignObj: Reign = { rulerId, dateStart, dateEnd, duration }
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