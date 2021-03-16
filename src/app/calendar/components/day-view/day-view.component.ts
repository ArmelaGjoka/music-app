import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Song } from '../../models/song.model';
import { SongsDialogComponent } from '../songs-dialog/songs-dialog.component';


@Component({
  selector: 'day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  @Input() day: number;

  @Input() disabled: boolean;

  @Input() songs: Song[] = [];

  constructor(public dialog: MatDialog) { }

  openSongsDialog() {
    this.dialog.open(SongsDialogComponent, {
      data: this.songs
    });
  }

  ngOnInit() {

  }

}
