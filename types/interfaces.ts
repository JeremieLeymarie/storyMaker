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
    role: string,
    birthConditions?: RangeCondition,
    deathConditions?: RangeCondition,
}

export interface BirthDeathParams {
    personId: number,
    condition?: RangeCondition,
}

export interface RangeCondition {
    min: number,
    max: number
}

export interface RulerRole {
    type: "ruler",
    start: EventDate,
    end: EventDate,
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
    dateEnd: EventDate | false,
    duration: EventDate | "current",
}

export interface DeathEventParams {
    personId: number,
    birth: EventDate,
}

export interface RegionParams {
    regionId: number,
    lifespan: number,
}