import { NameGeneratorParams } from "./interfaces";
import { getRandomNumberInRange } from "./utils";

export class Name {
    len: number;
    name: string;
    syllables = ["arn","arr","abr","art","arp","abb","aan","sor","sar","sur","sir","sab","bor","gna","gnu","gno","or","ar","far","fur","nor","arg","pla","pl","ahr","ohr","yar","yor","aha","ahu","hua","ahi","agh","gon","tag","tog","tia","yi","rah","ghu","sson","tar","mar","var","oa","alb","ulk","si","mi","ni","aha","ohr","ara","ull","hul","hal","ohu","uli","mar","mo","do","di","amm","umm"];
    public constructor({ min = 1, max = 4 }: NameGeneratorParams) {
        this.len = this.generateLength(min, max);
        this.name = this.generateName();
    }

    private generateLength(min: number, max: number) {
        return Math.floor(Math.random() * (max + min + 1) + min);
    }

    public generateName(): string {
        let name = "";
        for (let i = 0; i < this.len; i++) {
            name += this.syllables[getRandomNumberInRange(0, this.syllables.length)];
        }
        return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
    }


}