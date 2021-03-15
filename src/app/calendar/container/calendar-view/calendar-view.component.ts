import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../calendar.service';
import { Day } from '../../models/day.model';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName: string[];

  views = ['Monthly', 'Weekly'];

  selectedView = 'Monthly';


  constructor(public calendarService: CalendarService) {
      this.weekDaysName = this.calendarService.days;
  }

  ngOnInit(): void {

    this.setMonthDays(this.calendarService.getCurrentMonth());
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarService.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() : void{
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarService.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }

}
