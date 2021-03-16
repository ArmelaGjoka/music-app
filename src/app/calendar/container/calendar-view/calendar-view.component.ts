
import { Component, OnInit } from '@angular/core';
import { CALENDAR_VIEWS, DAY_MS, WEEK_DAYS } from '../../calendar.constant';
import { Song } from '../../models/song.model';
import { CalendarService } from '../../services/calendar.service';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent {

  // The first day of week or month being shown
  firstDate: Date;

  // The dates of week or month being shown
  dates: Array<Date>;

  views = Object.keys(CALENDAR_VIEWS);

  selectedView = CALENDAR_VIEWS.MONTHLY;

  days = WEEK_DAYS;

  constructor(
    private songService: SongsService,
    private calendarService: CalendarService
    ) {
    this.songService.getSongs();
    this.update(0, new Date());
  }

  update(offset = 0, refDate = this.firstDate): void {
    if (this.selectedView === CALENDAR_VIEWS.MONTHLY) {
      this.firstDate = new Date(refDate.getFullYear(), refDate.getMonth() + offset, 1);
    } else {
      const daysOffset = refDate.getDay() - offset * 7;
      this.firstDate = new Date(refDate.getTime() - DAY_MS * daysOffset);
    }

    this.dates = this.calendarService.getViewDays(this.selectedView, this.firstDate);
  }


  isSameView(date: Date): boolean {
    return date.getMonth() === this.firstDate.getMonth() || this.selectedView == CALENDAR_VIEWS.WEEKLY;
  }


  getSongsByDate(date: Date): Song[] {
    return this.songService.getSongsByDate(date);
  }

  deleteSong(index: number, date: Date): void {
    this.songService.deleteSong(index, date);
  }

}
