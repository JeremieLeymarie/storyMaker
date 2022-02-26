import { World } from "./WorldGenerator";
import { Printer } from "./Printer";
import * as fs from 'fs';
import * as path from 'path';
import { Timeline } from "./Timeline";
import * as readline from "readline";
export const world = new World({});
export const timeline = new Timeline({ world });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const PHASES = [
    "REGION_LIST",
    "REGION_DETAILS",
    "PERSON_DETAILS"
];

let CURRENT_PHASE = "REGION_LIST";

function main(): void {
    const printer = new Printer(world, timeline);
    printer.printWorld();

    rl.on("line", (line) => {
        if(line === "timeline"){
            printer.printTimeline(); 
        }
        else{
            printer.printRegion(Number(line));
        }
    });
}

function saveWorld(world: World) {
    fs.writeFileSync(path.join(__dirname, "./data/world.json"), JSON.stringify(world));
}

function saveTimeline(timeline: Timeline) {
    fs.writeFileSync(path.join(__dirname, "./data/timeline.json"), JSON.stringify(timeline));
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


// function parseCmd() {

// }

main();