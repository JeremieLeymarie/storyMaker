import { EventDate, PersonParams } from "../types/interfaces";
import { BirthEvent } from "./events/BirthEvent";
import { DeathEvent } from "./events/DeathEvent";
import { Name } from "./NameGenerator";

export class Person {
    name: string = "";
    birthday: EventDate;
    death: EventDate | false;

    public constructor(id: number) {
        this.name = new Name({}).generateName();
        this.birthday = new BirthEvent(id).date;
        this.death = new DeathEvent({ personId: id, birth: this.birthday }).date;
        people.push(this);
    }



}