import * as fs from 'fs';
import * as path from 'path';
import { Printer } from './Printer';
const printer = new Printer();

const PHASES = [
    "REGION_LIST",
    "REGION_DETAILS",
    "PERSON_DETAILS"
];

export function parseCmd(cmd: string) {

    if (cmds.includes(cmd)) {
        eval(cmd)();
    }
    else {
        switch (CURRENT_PHASE) {
            case "REGION_LIST":
                printer.printRegion(Number(cmd));
                CURRENT_PHASE = "REGION_DETAILS";
                break;
            case "REGION_DETAILS":
                printer.printPersonDetails(Number(cmd));
                break;
        }
    }
}

const cmds = [
    "save",
    "back",
]

function save() {
    saveWorld();
}

function back(){
    printer.printWorld();
}
// function handlePhases(printer: Printer, arg: string) {
//     switch (CURRENT_PHASE) {
//         case "REGION_LIST":
//             printer.printRegion(Number(arg));
//             break;
//         case "REGION_DETAILS":
//             break;
//     }
// }



function saveWorld() {
    fs.writeFileSync(path.join(__dirname, "./data/world.json"), JSON.stringify(world));
}

function saveTimeline() {
    fs.writeFileSync(path.join(__dirname, "./data/timeline.json"), JSON.stringify(timeline));
}