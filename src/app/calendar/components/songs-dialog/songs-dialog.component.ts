import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-songs-dialog',
  templateUrl: './songs-dialog.component.html',
  styleUrls: ['./songs-dialog.component.scss']
})
export class SongsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Song[]) {
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  delete(index: number): void {
    this.data.splice(index, 1);
  }

}
