import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { SONGS_ENDPOINT } from "../calendar.constant";
import { Song } from "../models/song.model";

@Injectable({providedIn: 'root'})
export class SongsService {

    // Save 100 songs in a key value structure for O(1) access
    songsData: { [date: string]: Song[]} = {};

    constructor(private http: HttpClient) {
    }

    getSongs(): void {
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
    })}

    getSongsByDate(date: Date): Song[] | null { 
        return this.songsData[this.dateToString(date)];
    }

    deleteSong(index: number, date: Date): void {
        const dateString = this.dateToString(date);
        this.songsData[dateString].splice(index, 1);
    }

    private dateToString(date: Date): string {
        return date.getFullYear() + "-" + this.numberToString(date.getMonth() + 1) + "-" + this.numberToString(date.getDate());
    }

    private numberToString(value: number): string {
        return value / 10 >= 1 ? value.toString() : '0' + value;
    }
}