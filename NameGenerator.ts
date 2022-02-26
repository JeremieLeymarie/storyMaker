import { NameGeneratorParams } from "./interfaces";
import { getRandomNumberInRange } from "./utils";

export class Name {
    name: string;
    len:number;
    syllables = ["arn", "arr", "abr", "art", "arp", "abb", "aan", "sor", "sar", "sur", "sir", "sab", "bor", "or", "ar", "far", "fur", "nor", "arg", "pla", "pl", "ahr", "ohr", "yar", "yor", "aha", "ahu", "hua", "ahi", "agh", "gon", "tag", "tog", "tia", "yi", "rah", "ghu", "sson", "tar", "mar", "var", "oa", "si", "mi", "ni", "aha", "ohr", "ara", "ull", "hul", "hal", "ohu", "uli", "mar", "mo", "do", "di", "amm", "umm", "opa", "pia", "luo", "omp", "tad", "niu", "tyu", "llo", "all", "ill", "oll", "aed", "kol", "kil", "kal", "yuu", "puu", "pua", "nni", "nna", "del", "led", "pel", "tet", "sed", "desa", "asd"];
    public constructor({ min = 1, max = 3 }: NameGeneratorParams) {
        this.len = getRandomNumberInRange(min, max);
        this.name = this.generateName();
    }


    public generateName(): string {
        let name = "";
        for (let i = 0; i < this.len; i++) {
            name += this.syllables[getRandomNumberInRange(0, this.syllables.length-1)];
        }
        return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
    }


}