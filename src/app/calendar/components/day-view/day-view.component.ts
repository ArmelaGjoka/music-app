import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Song } from '../../models/song.model';
import { SongsDialogComponent } from '../songs-dialog/songs-dialog.component';


@Component({
  selector: 'day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  @Input() day: Date;

  @Input() disabled: boolean;

  @Input() songs: Song[] = [];

  @Output() deleteSong = new EventEmitter<number>();

  private subscription: Subscription;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openSongsDialog(): void {
    this.subscription = this.dialog.open(SongsDialogComponent, {
      data: {
        songs: !this.songs ? [] : this.songs,
        day: this.day
      }

    }).componentInstance.deleteSongByIndex.
      subscribe((id: number) => this.deleteSong.emit(id));

      this.dialog.afterAllClosed.pipe(
        tap(n => this.subscription.unsubscribe())
      )
  }

}
