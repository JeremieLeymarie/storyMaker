import clc from 'cli-color';
import * as fs from 'fs';
import * as path from 'path';
import { Printer } from './Printer';
import { PersonPrinter } from './printers/PersonPrinter';
const printer = new Printer();

type anyClass = { new(...args: any[]): any };

class Command {
    key: string;
    callback: (...args: any[]) => unknown;
    usage: { [index:string]: anyClass };
    description?: string;

    constructor(key: string, usage: { [index:string]: anyClass }, cb: (...args: any[]) => unknown, description?: string) {
        this.key = key;
        this.callback = cb;
        this.usage = usage;
        this.description = description;
    }

    execute(params: string[]) {
        let arg = [];
        try {
            arg = params.map((param, i) => new (Object.values(this.usage)[i])(param));
            if (arg.length != Object.values(this.usage).length) throw "";

            try {
                this.callback(...arg); 
            } catch (error) {
                console.log(error);
                console.log(clc.red("Command \"" + this.key + "\" failed!"));
            }
        } catch {
            console.log(clc.red(`Usage is: ${this.key} ${Object.entries(this.usage).map(usage => `<${usage[0]}: ${usage[1].name.toLowerCase()}>`).join(" ")}`));
        }
    }
}

const commands = [
    new Command("save", {}, () => {
        fs.writeFile(path.join(__dirname, "../data/world.json"), JSON.stringify(world), (err) => {
            if (err) throw err;
            fs.writeFile(path.join(__dirname, "../data/timeline.json"), JSON.stringify(timeline), (err) => {
                if (err) throw err;
                fs.writeFile(path.join(__dirname, "../data/people.json"), JSON.stringify(people), (err) => {
                    if (err) throw err;
                    console.log(clc.green("Successfully saved!"));
                });
            });
        });
    }, "Save the current world info in the data folder"),
    new Command("regions", {}, printer.printAllRegions, "Print a list of all the regions"),
    new Command("time", {}, printer.printTimeline, "Print a timeline of all of the events that occurred in this world"),
    new Command("person", { id: Number }, PersonPrinter.printPersonDetails, "Get a individual's information with their ID"),
    new Command("region", { id: Number }, printer.printRegion.bind(printer), "Get a region's information with their ID"),
    new Command("day", { year: Number, month: Number, day: Number }, (year, month, day) => printer.printDay({ year, month, day }), "Get the events that occurred at a particular date"),
];

commands.push(new Command("help", {}, () => {
    console.log(clc.cyan("-".repeat(Math.floor(process.stdout.columns/2))) + "\n");
    commands.forEach(command => {
        console.log(clc.cyan(`${command.key} ${Object.entries(command.usage).map(usage => `<${usage[0]}: ${usage[1].name.toLowerCase()}>`).join(" ")} `) + (command.description ? command.description : "") + "\n");
    });
    console.log(clc.cyan("-".repeat(Math.floor(process.stdout.columns/2))));
}, "Displays the very help menu you're watching"));

export function parseCmd(rawStr: string) {
    const args = rawStr.split(" ");
    const cmd = commands.find(command => command.key == args[0].toLowerCase());
    if (cmd) cmd.execute(args.slice(1, args.length))
    else console.log(clc.red("Unknown command."));
}
