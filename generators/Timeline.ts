// import { getRandomNumberInRange } from "../utils";
// import { BirthEvent } from "./events/BirthEvent";
// import { BattleEvent } from "./events/BattleEvent";
// import { TimelineParams } from "../types/interfaces";
// const eventTypes = [BirthEvent, BattleEvent];
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// export class Timeline {
//     // years;

//     public constructor({ nbOfYears = 1 }: TimelineParams) {
//         // this.years = this.generateYears(nbOfYears);
//     }

//     // private generateYears(n: number) {
//     //     const years = [];
//     //     for (let i = 0; i < n; i++) {
//     //         const months = [];
//     //         for (let j = 0; j < 30; j++) {
//     //             const nbOfEvents = getRandomNumberInRange(0, 3);
//     //             const days = [];
//     //             for (let k = 0; k < nbOfEvents; k++) {
//     //                 const randEvent = eventTypes[getRandomNumberInRange(0, eventTypes.length - 1)];
//     //                 const date = {
//     //                     year: i,
//     //                     month: j,
//     //                     day: k,
//     //                 };
//     //                 days.push(new randEvent({ date }));
//     //             }
//     //             months.push(days);
//     //         }
//     //         years.push(months);
//     //     }
//     //     return years;
//     }



// }