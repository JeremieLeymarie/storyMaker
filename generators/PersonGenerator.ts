import { ErrorPrinter } from "../cli/printers/ErrorPrinter";
import { EventDate, PersonParams, RelationShip, Role } from "../types/interfaces";
import { firstLetterToUpperCase, getRandomBool, getRandomNumberInRange } from "../utils";
import { DateGenerator } from "./DateGenerator";
import { BirthEvent } from "./events/BirthEvent";
import { DeathEvent } from "./events/DeathEvent";
import RelationShipStart from "./events/RelationShipStart";
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
    physicalDescription?: {
        eyeColor?: string,
        hairColor?: string,
        height?: number,
        weight?: number,
    };
    family?: {
        relationShip: RelationShip,
        children?: number[]//personId, 
    }

    public constructor({ id, role, birthConditions, deathConditions }: PersonParams) {
        this.name = new Name({}).generateName();
        this.genre = getRandomBool() ? "man" : "woman";
        // if (role.type = "ruler") this.title = this.generateTitle();
        if (birthConditions && deathConditions) {
            this.birthday = new BirthEvent({ personId: id, condition: { min: birthConditions.min, max: birthConditions.max } }).date;
            this.death = new DeathEvent({ personId: id, condition: { cond: deathConditions.min, type: "deathAfter" } }).date;
        }
        else if (birthConditions) {
            this.birthday = new BirthEvent({ personId: id, condition: { min: birthConditions.min, max: birthConditions.max } }).date;
            this.death = new DeathEvent({ personId: id, condition: { cond: this.birthday.year, type: "deathAfter" } }).date;
        }
        else {
            this.birthday = new BirthEvent({ personId: id }).date;
            this.death = new DeathEvent({ personId: id, condition: { cond: this.birthday.year, type: "birth" } }).date;
        }
        this.role = role;
        this.id = people.length;
        people.push(this);
    }

    public generateTitle(): string | false {
        if (world) {
            const titles = ["King", "Queen", "Ruler", "Commander", "General", "President", "Leader"];
            return titles[getRandomNumberInRange(0, titles.length - 1)] + " of " + world.regions[this.role?.regionId].name;
        }
        else {
            ErrorPrinter.printError({ errorType: "worldNotGenerated", file: "PersonGenerator.ts", fn: "generateTitle", line: "39" });
            return false;
        }
    }

    public generateDetails() {
        this.physicalDescription = this.generatePhysicalDescription();
        this.family = this.generateFamily();
    }

    public generatePhysicalDescription() {
        const eyeColors = ["dark blue", "light blue", "amber", "brown", "hazel", "dark gray", "light gray", "light green", "dark green"];
        const hairColors = ["black", "dark brown", "medium brown", "light brown", "chestnut", "auburn", "red", "blond", "grey", "white", "bald", "purple", "green", "blue"];

        const desc = {
            eyeColor: eyeColors[getRandomNumberInRange(0, eyeColors.length - 1)],
            hairColor: hairColors[getRandomNumberInRange(0, hairColors.length - 1)],
            height: getRandomNumberInRange(100, 250),
            weight: getRandomNumberInRange(30, 200),
        };
        return desc;
    }

    public generateFamily() {
        const family: { relationShip?: RelationShip, children?: number[] } = {};
        const isInRelationship = getRandomBool();
        if (isInRelationship) {
            //CREATE A NEW PERSON OR USE AN EXISTING ONE 
            const birthConditions = { min: this.birthday.year - 15, max: this.birthday.year + 15 };
            const person = new Person({ id: people.length, role: null, birthConditions });
            family.relationShip = { start: new RelationShipStart(this, person), person, personId: person.id };
        }
        return family;
    }
}   