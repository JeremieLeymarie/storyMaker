declare global {
    var world: World;
    var timeline: any[][][][];
    var people: Person[];
    var CURRENT_PHASE: string,
}

declare module 'perlin-noise'{
    function generatePerlinNoise():number[];
    export = generatePerlinNoise;
}
export { };