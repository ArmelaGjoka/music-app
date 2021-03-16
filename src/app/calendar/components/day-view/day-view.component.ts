import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Song } from '../../models/song.model';
import { SongsDialogComponent } from '../songs-dialog/songs-dialog.component';


@Component({
  selector: 'day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit, OnDestroy {

  @Input() day: number;

  @Input() disabled: boolean;

  @Input() songs: Song[] = [];

  @Output() deleteSong = new EventEmitter<number>();

  private subscription: Subscription;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openSongsDialog(): void {
    this.subscription = this.dialog.open(SongsDialogComponent, {
      data: !this.songs ? [] : this.songs
    }).componentInstance.deleteSongByIndex.
      subscribe((id: number) => this.deleteSong.emit(id));

      this.dialog.afterAllClosed.pipe(
        tap(n => this.subscription.unsubscribe())
      )
  }


  ngOnDestroy() {
   // this.subscription?.unsubscribe();
  }

}
