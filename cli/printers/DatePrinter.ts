import { EventDate } from "../../types/interfaces";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "October", "September", "November", "December"]; 

export abstract class DatePrinter{
    public static formatDate(date: EventDate): string {
        return `${date.day + 1} ${months[date.month]} ${date.year + 1} `;
    }
} 