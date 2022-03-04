import { getRandomBool, getRandomNumberInRange, getRandomRGB } from "../utils";
const { createCanvas } = require('canvas')
import * as fs from "fs";

export class FlagGenerator {
    numberOfLines: number;
    orientation: "vertical" | "horizontal";
        width: number = 300;
        height: number = 200;
    filename: string;

    constructor(filename: string) {
        this.numberOfLines = getRandomNumberInRange(1, 4);
        this.orientation = getRandomBool() ? "horizontal" : "vertical";
        // this.orientation = "vertical"
        this.filename = filename;
        this.createFlag();
    }

    public createFlag() {

        let stripeWidth = (this.orientation === "vertical"
            ? this.width
            : this.height) / this.numberOfLines;

        const canvas = createCanvas(this.width, this.height, "svg");
        const ctx = canvas.getContext('2d');

        for (let i = 0; i < this.numberOfLines; i++) {
            ctx.fillStyle = getRandomRGB();
            let x1, x2, y1, y2;
            if (this.orientation === "vertical") {
                x1 = i * stripeWidth;
                y1 = 0;
                x2 = x1 + stripeWidth;
                y2 = this.height;
            }
            else {
                x1 = 0;
                y1 = i * stripeWidth;
                x2 = this.width;
                y2 = y1 + stripeWidth;
            }

            ctx.fillRect(x1, y1, x2, y2);
        }
        // this.drawTriangle(ctx);

        fs.writeFileSync("./data/img/" + this.filename, canvas.toBuffer());
        // return canvas.toBuffer(); 
        // console.log('<img src="' + canvas.toDataURL() + '" />')
    }

    // public drawTriangle(ctx) {
    //     const positions = [[
    //         { x: 0, y: 0 },
    //         { x: getRandomNumberInRange(10, this.width), y: getRandomNumberInRange(10, this.width) },
    //         { x: getRandomNumberInRange(10, this.width), y: getRandomNumberInRange(10, this.width) },
    //     ],
    //     [this.width,],
    //     [this.]]
    //     ctx.fillStyle = getRandomRGB();
    //     let x = getRandomNumberInRange(10, this.width - 10);
    //     let y = getRandomNumberInRange(10, this.height - 10);
    //     ctx.moveTo(x, y);
    //     x = getRandomNumberInRange(x + 10, this.width - 10);
    //     y = getRandomNumberInRange(y + 10, this.height - 10);
    //     ctx.lineTo(x, y);
    //     x = getRandomNumberInRange(x + 10, this.width - 10);
    //     y = getRandomNumberInRange(y + 10, this.height - 10);
    //     ctx.lineTo(x, y);
    //     ctx.fill();
    // }



}
