import { EventDate } from "../../types/interfaces";

export class ReignStart {
    date : EventDate; 
    rulerId :number; 
    regionId : number; 

    constructor(date:EventDate, rulerId:number, regionId:number){
        this.date = date; 
        this.rulerId = rulerId; 
        this.regionId= regionId;
        timeline[this.date.year][this.date.month][this.date.day] = this; 
    }   
}