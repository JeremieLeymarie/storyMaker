import { World } from "./WorldGenerator";
import clc from "cli-color";
import { Printer } from "./Printer";
import * as fs from 'fs';
import * as path from 'path';
import { Timeline } from "./Timeline";

const log = console.log;

function main(): void {
    const world = new World({});
    // saveWorld(world);
    // const printer = new Printer();
    // printer.printWorld();
    console.log(world.name);
    const timeline = new Timeline(); 
}

function saveWorld(world:World){
    fs.writeFileSync(path.join(__dirname, "./data/world.json"), JSON.stringify(world));
}

main();