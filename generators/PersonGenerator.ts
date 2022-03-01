import { EventDate, PersonParams } from "../types/interfaces";
import { BirthEvent } from "./events/BirthEvent";
import { DeathEvent } from "./events/DeathEvent";
import { Name } from "./NameGenerator";

const roles = ["ruler"];


export class Person {
    name: string = "";
    birthday: EventDate;
    death: EventDate | false;
    role: string;

    public constructor({ id, role, birthConditions, deathConditions }: PersonParams) {
        this.name = new Name({}).generateName();
        if (birthConditions && deathConditions) {
            this.birthday = new BirthEvent({ personId: id, condition: { min: birthConditions.min, max: birthConditions?.max } }).date;
            this.death = new DeathEvent({ personId: id, condition: { cond: deathConditions.min, type: "deathAfter" } }).date;
        }
        else {
            this.birthday = new BirthEvent({ personId: id }).date;
            this.death = new DeathEvent({ personId: id, condition: { cond: this.birthday.year, type: "birth" } }).date;
        }
        this.role = role;
        people.push(this);
    }



}