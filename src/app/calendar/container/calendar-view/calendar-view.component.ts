
import { Component, OnInit } from '@angular/core';
import { DAY_MS, WEEK_DAYS } from '../../calendar.constant';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  // The first day of week or month being shown
  firstDate: Date;

  // The dates of week or month being shown
  dates: Array<Date>;

  views = ['Monthly', 'Weekly'];

  selectedView = 'Monthly';

  days = WEEK_DAYS;

  constructor(private songService: SongsService) {
    this.songService.getSongs();
    this.update(0, new Date());
  }

  ngOnInit(): void {
  }

  update(offset = 0, refDate = this.firstDate): void {
    if (this.selectedView === 'Monthly') {
      this.firstDate = new Date(refDate.getFullYear(), refDate.getMonth() + offset, 1);
      this.dates = this.getCalendarMonthlyDays(this.firstDate);
    } else {
      const daysOffset = refDate.getDay() - offset * 7;
      this.firstDate = new Date(refDate.getTime() - DAY_MS * daysOffset);
      this.dates = this.getCalendarWeeklyDays(this.firstDate);
    }

  }
  
  isSameMonth(date: Date): boolean {
    return date.getMonth() === this.firstDate.getMonth();
  }

  private getCalendarMonthlyDays(date: Date) {
    const startDay = this.getCalendarStartDay(date);
    const startTime =  new Date(startDay.valueOf()).getTime();

    return this.range(0, 34).map(num => new Date(startTime + DAY_MS * num));
  }

  private getCalendarWeeklyDays(date: Date) {
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

  deleteSong(index: number, date: Date): void {
    this.songService.deleteSong(index, date);
  }

  viewChanged() {
    this.update();
  }

}
