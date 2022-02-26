import { World } from "./WorldGenerator";

export interface NameGeneratorParams {
    min?: number,
    max?: number,
}

export interface WorldGeneratorParams {
    nbOfRegions?: number,
}

export interface TimelineParams {
    nbOfYears?: number,
    world : World,
}