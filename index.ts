import { World } from "./generators/WorldGenerator";
import { Printer } from "./cli/Printer";
import * as readline from "readline";
import { parseCmd } from "./cli/main";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

global.CURRENT_PHASE = "REGION_LIST";

function main(): void {
    global.people = [];
    global.world = new World({});
    global.timeline = []; 
    const printer = new Printer();
    printer.printWorld();

    rl.on("line", (line) => {
      parseCmd(line);
    });
}




main();