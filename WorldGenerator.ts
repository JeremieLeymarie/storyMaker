import { WorldGeneratorParams } from "./interfaces";
import { getRandomNumberInRange } from "./utils";
import { Region } from "./RegionGenerator";
import { Name } from "./NameGenerator";

export class World{
    nbOfRegions:number;
    name:string;
    regions:Region[];

    constructor({nbOfRegions = 15} : WorldGeneratorParams ){
        this.nbOfRegions = getRandomNumberInRange(10, 100); 
        this.name = new Name({}).generateName(); 
        this.regions=[];
        this.generateRegions(); 
    }

    private generateRegions(){
        for(let i = 0; i < this.nbOfRegions; i++){
            // console.log(new Region());
            this.regions.push(new Region());
        }
    }

    public save(){
        
    }
}