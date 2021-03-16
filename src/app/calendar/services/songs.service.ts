import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { SONGS_ENDPOINT } from "../calendar.constant";
import { Song } from "../models/song.model";

@Injectable({providedIn: 'root'})
export class SongsService {

    songsData: { [date: string]: Song[]} = {};

    constructor(private http: HttpClient) {
    }

    getSongs() {
        this.http.get<Song[]>(SONGS_ENDPOINT).pipe(    
            catchError(e => throwError(e)
          )  
        ).subscribe(data => {
                (data as Song[]).forEach(song => {
                    const stringDate = song.release_date;
                    if (!this.songsData[stringDate]) {
                        this.songsData[stringDate] = [];
                    }
                    this.songsData[stringDate] = [...this.songsData[stringDate], song];
                });
               // console.log('Result: ', this.songsData);
    })}

    getSongsByDate(date: Date): Song[] | null { 
        const dateString = date.getFullYear() + "-" + this.numberToString(date.getMonth() + 1) + "-" + this.numberToString(date.getDate());
        return this.songsData[dateString];
    }

    private numberToString(value: number): string {
        return value / 10 >= 1 ? value.toString() : '0' + value;
    }

    deleteSong(index: number, date: Date): void {
        const dateString = date.getFullYear() + "-" + this.numberToString(date.getMonth() + 1) + "-" + this.numberToString(date.getDate());
        this.songsData[dateString].splice(index);
    }
}