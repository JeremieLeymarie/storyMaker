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
  global.timeline = createEmptyTimeline();
  global.world = new World({ lifeSpan: 100 });
  world.eventCount = getEventCount();
  const printer = new Printer();
  printer.printWorld();

  rl.on("line", (line) => {
    parseCmd(line);
  });
}

function createEmptyTimeline() {
  const arr = [];
  const lifeSpan = 100;
  for (let i = 0; i < lifeSpan; i++) {
    const year = [];
    for (let j = 0; j < 12; j++) {
      const month = [];
      for (let k = 0; k < 30; k++) {
        month.push([]);
      }
      year.push(month);
    }
    arr.push(year);
  }
  return arr;
  // return Array(100).fill(Array(12).fill(Array(30).fill([])));
}

function getEventCount(): number {
  let eventCount = 0;
  timeline.forEach(y => {
    y.forEach(m => {
      m.forEach(d => {
        eventCount += d.length;
      });
    });
  });
  return eventCount;
}

main();