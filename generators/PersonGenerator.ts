import { ErrorPrinter } from "../cli/printers/ErrorPrinter";
import { EventDate, PersonParams, Role } from "../types/interfaces";
import { firstLetterToUpperCase, getRandomBool, getRandomNumberInRange } from "../utils";
import { BirthEvent } from "./events/BirthEvent";
import { DeathEvent } from "./events/DeathEvent";
import { Name } from "./NameGenerator";

const roles = ["ruler"];


export class Person {
    name: string = "";
    birthday: EventDate;
    death: EventDate | false;
    role: Role;
    title: string = "";
    genre: string;
    id: number;

    public constructor({ id, role, birthConditions, deathConditions }: PersonParams) {
        this.name = new Name({}).generateName();
        this.genre = getRandomBool() ? "man" : "woman";
        // if (role.type = "ruler") this.title = this.generateTitle();
        if (birthConditions && deathConditions) {
            this.birthday = new BirthEvent({ personId: id, condition: { min: birthConditions.min, max: birthConditions?.max } }).date;
            this.death = new DeathEvent({ personId: id, condition: { cond: deathConditions.min, type: "deathAfter" } }).date;
        }
        else {
            this.birthday = new BirthEvent({ personId: id }).date;
            this.death = new DeathEvent({ personId: id, condition: { cond: this.birthday.year, type: "birth" } }).date;
        }
        this.role = role;
        this.id = people.length;
        people.push(this);
    }

    public generateTitle(): string|false {
        if(world){
            const titles = ["King", "Queen", "Ruler", "Commander", "General", "President", "Leader"];
            return titles[getRandomNumberInRange(0, titles.length - 1)] + " of " + world.regions[this.role.regionId].name;
        }
        else{
            ErrorPrinter.printError({errorType : "worldNotGenerated", file : "PersonGenerator.ts", fn : "generateTitle", line: "39"});
            return false;
        }
    }

}