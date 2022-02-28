import clc from "cli-color";
import { BirthEvent } from "../../generators/events/BirthEvent";
import { DeathEvent } from "../../generators/events/DeathEvent";
import { ReignEnd } from "../../generators/events/ReignEnd";
import { ReignStart } from "../../generators/events/ReignStart";
import { Person } from "../../generators/PersonGenerator";
import { Event } from "../../types/interfaces";
import { DatePrinter } from "./DatePrinter";
import { PersonPrinter } from "./PersonPrinter";

const log = console.log;

export abstract class EventPrinter {

    public static printEvent(event: Event): void {
        // log(clc.red(event.eventType));
        log("\n" + clc.bgMagenta(DatePrinter.formatDate(event.date)) + ":\n");
        eval(`this.print${event.eventType.slice(0, 1).toUpperCase() + event.eventType.slice(1, event.eventType.length)}`)(event);
    }

    public static printBirth(event: BirthEvent): void {
        const person: Person = people[event.personId];
        log(clc.yellow(`# Birth of ${PersonPrinter.getPersonString(event.personId)}`));
    }

    public static printDeath(event: DeathEvent): void {
        console.log("death event");
    }

    public static printReignStart(event: ReignStart): void {
        console.log("reignstart event");
    }

    public static printReignEnd(event: ReignEnd): void {
        console.log("reignend event");
    }

}