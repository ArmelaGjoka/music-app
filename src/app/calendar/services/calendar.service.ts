import { Injectable } from "@angular/core";
import { CALENDAR_VIEWS, DAY_MS } from "../calendar.constant";

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    getViewDays(selectedView: string, firstDate: Date): Date[] {
       return selectedView === CALENDAR_VIEWS.WEEKLY ? this.getCalendarWeeklyDays(firstDate) : this.getCalendarMonthlyDays(firstDate);
    }

    private getCalendarMonthlyDays(date: Date): Date[] {
        const startDay = this.getCalendarStartDay(date);
        const startTime =  new Date(startDay.valueOf()).getTime();
    
        return this.range(0, 34).map(num => new Date(startTime + DAY_MS * num));
      }
    
    private getCalendarWeeklyDays(date: Date): Date[] {
        const startTime =  new Date(date.valueOf()).getTime();
        return this.range(0, 6).map(num => new Date(startTime + DAY_MS * num));
      }
    
    private getCalendarStartDay(date: Date): Date {
        const firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        return new Date(firstOfMonth.getTime() - DAY_MS * firstOfMonth.getDay());
      }
    
    private range(start, end, length = end - start + 1) {
        return Array.from({ length }, (_, i) => start + i)
    }
}