import { Person } from "../PersonGenerator";
import { World } from "../WorldGenerator";
import { HistoricEvent } from "./EventGenerator";

export class DeathEvent extends HistoricEvent {
    person: Person;

    public constructor(world:World) {
        super();
        this.person = new Person();
    }
}