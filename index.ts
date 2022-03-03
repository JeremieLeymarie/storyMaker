import { World } from "./generators/WorldGenerator";
import { Printer } from "./cli/Printer";
import * as readline from "readline";
import { parseCmd } from "./cli/main";
import { createEmptyTimeline, getEventCount } from "./utils";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

global.CURRENT_PHASE = "REGION_LIST";

function main(): void {
  global.people = [];
  global.timeline = createEmptyTimeline();
  global.world = new World({ lifeSpan: 100 });
  world.eventCount = getEventCount();
  const printer = new Printer();
  printer.printWorld();

  rl.on("line", (line) => {
    parseCmd(line);
  });
}

main();