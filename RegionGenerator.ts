import { Name } from "./NameGenerator";
import { Person } from "./PersonGenerator";
import { getRandomNumberInRange } from "./utils";

export class Region {
    name: string;
    climate: string;
    population: number;
    ruler : Person;

    public constructor() {
        this.name = new Name({}).generateName();
        this.climate = this.generateClimate(); 
        this.population = getRandomNumberInRange(1000, 10000000); 
        this.ruler = new Person(); 
    }

    private generateClimate(): string {
        const climates = ["tropical", "dry", "temperate", "continental", "polar"];
        return climates[Math.floor(Math.random() * climates.length)];
    }

}