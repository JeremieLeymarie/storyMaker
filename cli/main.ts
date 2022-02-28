import * as fs from 'fs';
import * as path from 'path';
import { EventDate } from '../types/interfaces';
import { Printer } from './Printer';
import { PersonPrinter } from './printers/PersonPrinter';
const printer = new Printer();

const PHASES = [
    "REGION_LIST",
    "REGION_DETAILS",
    "PERSON_DETAILS",
    "TIMELINE",
];

export function parseCmd(cmd: string) {
    const args = cmd.split(" ");
    if (cmds.includes(args[0])) {
        eval(args[0])(args.slice(1, args.length));
    }
    else {
        console.log(clc.red("Unknown command, try again"))
    }
    // else {
    //     switch (CURRENT_PHASE) {
    //         case "REGION_LIST":
    //             printer.printRegion(Number(cmd));
    //             CURRENT_PHASE = "REGION_DETAILS";
    //             break;
    //         case "REGION_DETAILS":
    //             PersonPrinter.printPersonDetails(Number(cmd));
    //             break;
    //     }
    // }
}

const cmds = [
    "save",
    "regions",
    "time",
    "day",
    "person",
    "region",
]

function save() {
    saveWorld();
    saveTimeline();
    console.log("Save successfull");
}

function regions() {
    printer.printWorld();
}

function time() {
    printer.printTimeline();
}

function person(args: string[]) {
    PersonPrinter.printPersonDetails(Number(args[0]))
}

function region(args: string[]) {
    printer.printRegion(Number(args[0]));
}

function day(args: string[]) {
    //params has to be in the format of : year month day
    const [year, month, day] = args;
    const date = { year: Number(year) - 1, month: Number(month) - 1, day: Number(day) - 1 };
    printer.printDay(date);
}



function saveWorld() {
    fs.writeFileSync(path.join(__dirname, "../data/world.json"), JSON.stringify(world));
}

function saveTimeline() {
    fs.writeFileSync(path.join(__dirname, "../data/timeline.json"), JSON.stringify(timeline));
}