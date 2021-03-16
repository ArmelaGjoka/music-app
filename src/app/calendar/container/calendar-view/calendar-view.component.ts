
import { Component } from '@angular/core';
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

  // Date contained in currently viewed month or week
  anchorDate: Date;

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

  update(offset = 0, anchor = this.anchorDate): void {
    if (this.selectedView === CALENDAR_VIEWS.MONTHLY) {
      this.anchorDate = new Date(anchor.getFullYear(), anchor.getMonth() + offset, Math.min(28, anchor.getDate()));
    } else {
      this.anchorDate = new Date(anchor.getTime() + DAY_MS * 7 * offset);
    }

    this.dates = this.calendarService.getViewDays(this.selectedView, this.anchorDate);
  }


  // Display dates outside the selected month as disabled
  isSameView(date: Date): boolean {
    return date.getMonth() === this.anchorDate.getMonth() || this.selectedView == CALENDAR_VIEWS.WEEKLY;
  }


  getSongsByDate(date: Date): Song[] {
    return this.songService.getSongsByDate(date);
  }

  deleteSong(index: number, date: Date): void {
    this.songService.deleteSong(index, date);
  }

}
