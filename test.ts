import { World } from "./generators/WorldGenerator";
import { createEmptyTimeline } from "./utils";

global.people = [];
global.timeline = createEmptyTimeline();
global.world = new World({}); 

const person = people[0]; 

// console.log(person); 
person.generateDetails(); 
// console.log(person);
if(person.family.relationShip){
    // console.log(person.family.relationShip.start);
    console.log(person.family.relationShip.start.people[0]);
    console.log(person.family.relationShip.start.people[1]);
    console.log(person.family.relationShip.start.date.year);
    // console.log(person.family.relationShip.start.);
    // console.log(person.family.relationShip.);
}
