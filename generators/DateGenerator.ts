import { EventDate } from "../types/interfaces";
import { getRandomNumberInRange } from "../utils";

export abstract class DateGenerator {
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    public static randomDate(min: number = 0, max: number = 100): EventDate {
        return {
            year: getRandomNumberInRange(min, max),
            month: getRandomNumberInRange(0, 11),
            day: getRandomNumberInRange(0, 29),
        };
    }

    public static generateTimeOfDeath(birth: EventDate): EventDate {
        const yearsToLive = getRandomNumberInRange(1, 110);
        return {
            year: birth.year + yearsToLive,
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
            month -= 11;
        }
        return { year, month, day };
    }
}