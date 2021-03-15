import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  @Input() day: number;

  constructor() { }

  ngOnInit() {
  }

}
