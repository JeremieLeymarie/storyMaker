import { EventDate } from "../types/interfaces";
import { getRandomNumberInRange } from "../utils";

export abstract class DateGenerator {
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    public static randomDate(min: number = 0, max: number = 99): EventDate {
        return {
            year: getRandomNumberInRange(min, max),
            month: getRandomNumberInRange(0, 11),
            day: getRandomNumberInRange(0, 29),
        };
    }

    public static generateTimeOfDeath(birth: number): EventDate {
        const yearsToLive = getRandomNumberInRange(1, 110);
        return {
            year: birth + yearsToLive,
            month: getRandomNumberInRange(0, 11),
            day: getRandomNumberInRange(0, 29),
        };
    }

    public static addDates(a: EventDate, b: EventDate): EventDate {
        let year = a.year + b.year;
        let month = a.month + b.month;
        let day = a.day + b.day;
        if (day > 29) {
            month++;
            day -= 29;
        }
        if (month > 11) {
            year++;
            month -= 12;
        }
        return { year, month, day };
    }

    public static substractDates(a: EventDate, b: EventDate): EventDate {
        let year = Math.abs(a.year - b.year);
        let month = Math.abs(a.month - b.month);
        let day = Math.abs(a.day - b.day);

        return { year, month, day }
    }

    public static compareDates(a: EventDate, b: EventDate, min: boolean = true): EventDate  {
        if (a.year < b.year) return min ? a : b;
        if (a.month < b.month) return min ? a : b;
        if (a.day < b.day) return min ? a : b;
        else return a;
    }
}