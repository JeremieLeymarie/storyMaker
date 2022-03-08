import { BirthEvent } from "../generators/events/BirthEvent"
import { DeathEvent } from "../generators/events/DeathEvent"
import { ReignEnd } from "../generators/events/ReignEnd"
import { ReignStart } from "../generators/events/ReignStart"
import RelationShipStart from "../generators/events/RelationShipStart"
import { Person } from "../generators/PersonGenerator"

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
    id: number,
    role: Role,
    birthConditions?: RangeCondition,
    deathConditions?: RangeCondition,
}

export interface BirthParams {
    personId: number,
    condition?: RangeCondition,
}

export interface RangeCondition {
    min: number,
    max: number
}

export interface RulerRole {
    type: "ruler",
    start?: EventDate,
    end?: EventDate | false,
    regionId: number,
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
    rulerName?: string,
    rulerId: number,
    dateStart: EventDate,
    dateEnd: EventDate | false,
    duration: EventDate | "current",
}

export interface DeathEventParams {
    personId: number,
    condition: {
        type: "birth" | "deathAfter",
        cond: number,
    }
}

export interface RegionParams {
    regionId: number,
    lifespan: number,
}

export interface ErrorPrinterParams {
    errorType: string,
    fn?: string,
    file: string,
    line?: string,
}

export interface RelationShip {
    personId: number,
    person: Person,
    start: RelationShipStart,
}

export type Role = RulerRole | null;
export type Event = BirthEvent | DeathEvent | ReignStart | ReignEnd;