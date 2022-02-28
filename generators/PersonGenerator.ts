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
        if (birthConditions) {
            this.birthday = new BirthEvent({ personId: id, condition: { min: birthConditions?.min, max: birthConditions?.max } }).date;
        }
        else {
            this.birthday = new BirthEvent({ personId: id }).date;
        }
        this.death = new DeathEvent({ personId: id, birth: this.birthday }).date;
        this.role = role;
        people.push(this);
    }



}