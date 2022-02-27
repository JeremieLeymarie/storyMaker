import { EventDate, PersonParams } from "../types/interfaces";
import { BirthEvent } from "./events/BirthEvent";
import { DeathEvent } from "./events/DeathEvent";
import { Name } from "./NameGenerator";

const roles= ["ruler"];


export class Person {
    name: string = "";
    birthday: EventDate;
    death: EventDate | false;
    role:string;

    public constructor(id: number, role:string) {
        this.name = new Name({}).generateName();
        this.birthday = new BirthEvent(id).date;
        this.death = new DeathEvent({ personId: id, birth: this.birthday }).date;
        this.role=role;
        people.push(this);
    }



}