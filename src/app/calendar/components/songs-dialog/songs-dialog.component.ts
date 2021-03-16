import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-songs-dialog',
  templateUrl: './songs-dialog.component.html',
  styleUrls: ['./songs-dialog.component.scss']
})
export class SongsDialogComponent {

  @Output() deleteSongByIndex = new EventEmitter<number>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {songs: Song[], day: Date}) {
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.data.songs, event.previousIndex, event.currentIndex);
  }

  delete(index: number): void {
    this.deleteSongByIndex.emit(index);
  }

}
