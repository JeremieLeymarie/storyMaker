import { Name } from "./NameGenerator";

export class Person {
    name: string = "";
    birthday: string;
    age: number;

    public constructor() {
        this.name = new Name({}).generateName();
        this.birthday = "0";
        this.age = 0;
    }

}