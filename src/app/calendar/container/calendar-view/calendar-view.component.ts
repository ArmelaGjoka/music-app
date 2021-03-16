
import { Component, OnInit } from '@angular/core';
import { DAY_MS, WEEK_DAYS } from '../../calendar.constant';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  firstOfMonth: Date = new Date();

  dates: Array<Date>;

  views = ['Monthly', 'Weekly'];

  selectedView = 'Monthly';

  days = WEEK_DAYS;

  constructor(private songService: SongsService) {
    this.songService.getSongs();
    this.setMonth(0);
  }

  ngOnInit(): void {
  }

  setMonth(monthOffset: number, refDate = this.firstOfMonth): void {
    this.firstOfMonth = new Date(refDate.getFullYear(), refDate.getMonth() + monthOffset, 1);
    this.dates = this.getCalendarDays(this.firstOfMonth);
  }
  
  isSameMonth(date: Date): boolean {
    return date.getMonth() === this.firstOfMonth.getMonth();
  }

  private getCalendarDays(date: Date) {
    const startDay = this.getCalendarStartDay(date);
    const startTime =  new Date(startDay.valueOf()).getTime();

    return this.range(0, 34).map(num => new Date(startTime + DAY_MS * num));
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

}
