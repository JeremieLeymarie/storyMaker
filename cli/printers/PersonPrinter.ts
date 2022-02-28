import clc from "cli-color";
import { log } from "console";
import { Person } from "../../generators/PersonGenerator";
import { DatePrinter } from "./DatePrinter";

export abstract class PersonPrinter {

    public static getPersonString(id: number): string {
        const person: Person = people[id];
        return clc.cyan(`[${id}] ${person.name}`);
    }

    public static printPersonLight(id: number): void {
        const person = people[id];
        log(PersonPrinter.getPersonString(id));
    }

    public static printPersonDetails(id: number): void {
        const person = people[id];
        log(PersonPrinter.getPersonString(id));
        log(`Born : ${DatePrinter.formatDate(person.birthday)}`)
        log(`Death : ${DatePrinter.formatDate(person.death)}`)
    }
}