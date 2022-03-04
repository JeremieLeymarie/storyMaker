import clc from "cli-color";
import perlin from "perlin-noise";
import { createCanvas } from "canvas";
import { getRandomNumberInRange } from "../utils";
import * as fs from "fs";

export class MapGenerator {
    width: number = 400;
    height: number = 200;
    landData: number[][];
    topography: number[][];
    tileSize: number = 5;

    constructor() {
        const landNoise = perlin.generatePerlinNoise(this.width, this.height, { octaveCount: 7, amplitude: .2, persistence: .45 })
        const topographyNoise = perlin.generatePerlinNoise(this.width, this.height, { octaveCount: 5, amplitude: .2, persistence: .2 })
        this.landData = this.formatArray(landNoise);
        this.topography = this.formatArray(topographyNoise);
    }

    public formatArray(arr: number[]): number[][] {
        const res = [];
        for (let i = 0; i < arr.length - this.width; i += this.width) {
            res.push(arr.slice(i, i + this.width));
        }
        return res;
    }

    public addMin() {

    }

    public generatePng() {
        const colors = {
            water: ["#071c3d", "#0b2040", "#0d1f3b", "#0f2140", "#15294a"],
            land: [
                "#053b19", //dark" green
                "#053b19", //dark" green
                "#053b19", //dark" green
                "#053b19", //dark" green
                "#0d4522", //green
                "#0d4522", //green
                "#275221", //green
                "#635436", //lighter brown
                "#453920", //brown
                "#7a715e", //light gray
            ]
        }
        const canvas = createCanvas(this.width * this.tileSize, this.height * this.tileSize);
        const ctx = canvas.getContext('2d', { pixelFormat: "RGBA32" });

        const waterLandLimit = getRandomNumberInRange(2, 5) / 10;
        console.log(waterLandLimit);

        this.landData.forEach((row, i) => {
            row.forEach((tile, j) => {
                if (tile < .5) {
                    if(tile < .1) ctx.fillStyle = colors.water[0];
                    else if(tile < .2) ctx.fillStyle = colors.water[1];
                    else if(tile < .3) ctx.fillStyle = colors.water[2];
                    else if(tile < .4) ctx.fillStyle = colors.water[3];
                    else  ctx.fillStyle = colors.water[4];
                }
                else {
                    ctx.fillStyle = colors.land[Math.round(this.topography[i][j] * 10)];
                }
                ctx.fillRect(j * this.tileSize, i * this.tileSize, j * this.tileSize + this.tileSize, i * this.tileSize + this.tileSize);
            });
        });

        fs.writeFile("./data/img/world.png", canvas.toBuffer(), (err) => {
            if (err) console.log(err);
        });
    }


    // public printMapCli() {
    //     this.mapData.forEach(row => {
    //         let rowStr = "";
    //         row.forEach(tile => {
    //             if (tile > 0.5) {

    //                 if (tile < .6) rowStr += clc.bgXterm(28)(" ");
    //                 else if (tile < .7) rowStr += clc.bgXterm(29)(" ");
    //                 else if (tile < .8) rowStr += clc.bgXterm(30)(" ");
    //                 else if (tile < .9) rowStr += clc.bgXterm(34)(" ");
    //                 else rowStr += clc.bgXterm(35)(" ");
    //             }
    //             else {
    //                 rowStr += clc.bgBlue(" ");
    //             }
    //         });
    //         console.log(rowStr);
    //     })
    // }

}