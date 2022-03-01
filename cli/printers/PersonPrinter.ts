import clc from "cli-color";
import { log } from "console";
import { DateGenerator } from "../../generators/DateGenerator";
import { Person } from "../../generators/PersonGenerator";
import { firstLetterToUpperCase } from "../../utils";
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
        // log(PersonPrinter.getPersonString(id));
        log(clc.blue("\n\n_________________________________________________________________"));
        log(PersonPrinter.generateDescription(id));
        PersonPrinter.printDates(id);
        log(clc.blue("_________________________________________________________________\n\n"));
    }

    public static generateDescription(id: number): string {
        const person = people[id];
        if (person.description) {
            return person.description;

        }
        else {
            const desc = eval(`PersonPrinter.get${firstLetterToUpperCase(person.role.type)}Description`)(person);
            people[person.id].desc = desc;
            return desc;
        }

    }

    private static getRulerDescription(person: Person): string {
        let str = `\n${clc.cyan(`[${person.id}] ${person.name}`)}`;
        str += `, ${person.generateTitle()}.\n\n`;
        const region = world.regions[person.role.regionId];
        if (person.role.start) {
            const ageBeginningOfReign = DateGenerator.substractDates(person.role.start, person.birthday).year;
            str += `They ruled from ${DatePrinter.formatDate(person.role.start)}, at the age of ${ageBeginningOfReign} years old \n`;
            if (person.role.end) {
                const durationOfReign = DateGenerator.substractDates(person.role.end, person.role.start);
                str += `Their reign lasted ${durationOfReign.year} years, ${durationOfReign.month} months and ${durationOfReign.day} days.\n`
                str += `It ended the ${DatePrinter.formatDate(person.role.end)}\n`
            }
            else {
                str += `and are still the current leader of ${region.name}.\n`;
            }
        }
        return str;
    }

    public static printDates(id: number): void {
        const person = people[id];
        log(`They were born the ${DatePrinter.formatDate(person.birthday)} `);
        log(`and died the ${DatePrinter.formatDate(person.death)}`);
    }
}