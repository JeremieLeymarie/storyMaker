import { World } from "../generators/WorldGenerator";

export interface NameGeneratorParams {
    min?: number,
    max?: number,
}

export interface WorldGeneratorParams {
    nbOfRegions?: number,
    lifeSpan?: number,
}

export interface TimelineParams {
    nbOfYears?: number,
}

export interface PersonParams {
    birth: EventDate,
    death: EventDate,
}

export interface EventParams {
    date?: EventDate,
}

export interface EventDate {
    year: number,
    month: number,
    day: number,
    dateString?: string,
}

export interface Reign {
    rulerId: number,
    dateStart: EventDate,
    dateEnd: EventDate,
    duration : EventDate, 
}

export interface DeathEventParams {
    personId: number,
    birth: EventDate,
}

export interface RegionParams{
    regionId : number, 
    lifespan : number,
}