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
                    const stringDate = song.release_date + "";
                    if (!this.songsData[stringDate]) {
                        this.songsData[stringDate] = [];
                    }
                    this.songsData[stringDate] = [...this.songsData[stringDate], song];
                });
    })}

    getSongsByDate(date: Date) {
        const dateString = date.getFullYear() + "-" + this.numberToString(date.getUTCMonth() + 1) + "-" + this.numberToString(date.getUTCDay() + 1);
        return this.songsData[dateString];
    }

    private numberToString(value: number): string {
        return value / 10 === 1 ? value.toString() : '0' + value;
    }
}