
import { Component, OnInit } from '@angular/core';
import { DAY_MS, WEEK_DAYS } from '../../calendar.constant';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  dates: Array<Date> = [];

  date = new Date();

  views = ['Monthly', 'Weekly'];

  days = WEEK_DAYS;

  selectedView = 'Monthly';


  constructor(private songsService: SongsService) {
    this.songsService.getSongs();
    this.dates = this.getCalendarDays(this.date);
  }

  ngOnInit(): void {
  }

  setMonth(inc: number): void {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
    this.date = new Date(year, month + inc, 1);
    this.dates = this.getCalendarDays(this.date);
  }
  
  isSameMonth(date: Date): boolean {
    return date.getMonth() === this.date.getMonth();
  }

  private getCalendarDays(date: Date) {
    const calendarStartTime =  this.getCalendarStartDay(date).getTime();

    return this.range(0, 41)
      .map(num => new Date(calendarStartTime + DAY_MS * num));
  }

  private getCalendarStartDay(date: Date): Date {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    return this.range(1,7)
      .map(num => new Date(firstDayOfMonth - DAY_MS * num))
      .find(dt => dt.getDay() === 0)
  }

  private range(start, end, length = end - start + 1) {
    return Array.from({ length }, (_, i) => start + i)
  }

}
