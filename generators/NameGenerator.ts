import { NameGeneratorParams } from "../types/interfaces";
import { firstLetterToUpperCase, getRandomNumberInRange } from "../utils";

export class Name {
    name: string;
    len: number;
    syllables = ["arn", "arr", "abr", "art", "arp", "abb", "aan", "sor", "sar", "sur", "sir", "sab", "bor", "or", "ar", "far", "fur", "nor", "arg", "pla", "pl", "ahr", "ohr", "yar", "yor", "aha", "ahu", "hua", "ahi", "agh", "gon", "tag", "tog", "tia", "yi", "rah", "ghu", "sson", "tar", "mar", "var", "oa", "si", "mi", "ni", "aha", "ohr", "ara", "ull", "hul", "hal", "ohu", "uli", "mar", "mo", "do", "di", "amm", "umm", "opa", "pia", "luo", "omp", "tad", "niu", "tyu", "llo", "all", "ill", "oll", "aed", "kol", "kil", "kal", "yuu", "puu", "pua", "nni", "nna", "del", "led", "pel", "tet", "sed", "desa", "asd", "pac", "pak", "akk", "ukk", "ekk", "eke", "pek", "ilo", "muo", "ohn", "tin", "ton", "tan", "nat", "nut", "not", "plu", "pla", "pli", "ap", "mol", "mal", "pur", "par", "tap", "dun", "dan", "din", "don", "dyn", "yyn", "ooph", "sla", "sal", "aol", "ail", "sola", "puun", "hon", "han", "ut", "at", "ot", "od", "li", "la", "lo", "lyl", "app", "tu", "to", "ti", "tza", "za", "zo", "oza", "mis", "mas", "nan", "ru", "vi", "vil", "vvim", "ouf", "fou", "fa", "fi", "go", "ga", "ran", "ce", "del", "fel", "tel", "gel", "ge", "se", "ze", "iz", "yiz", "cla", "cli", "col", "oq", "ok", "ik", "uk", "iok", "juu"];
    public constructor({ min = 1, max = 3 }: NameGeneratorParams) {
        this.len = getRandomNumberInRange(min, max);
        this.name = this.generateName();
    }


    public generateName(): string {
        let name = "";
        for (let i = 0; i < this.len; i++) {
            // const j = getRandomNumberInRange(0, this.syllables.length - 1);
            // if(this.syllables[j] == undefined){
            //     console.log(j, this.syllables.length);
            // }  
            name += this.syllables[getRandomNumberInRange(0, this.syllables.length - 1)];
        }
        return firstLetterToUpperCase(name);
    }


}