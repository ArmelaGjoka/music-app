import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

    login(user: User): Observable<User> {
        return this.http.post<User>(`/users/authenticate`, { username: user.username, password: user.password })
            .pipe(map(user => {
                localStorage.setItem('musicUser', JSON.stringify(user));
                return user;
         }));
    }

    logout(): void {
        localStorage.removeItem('musicUser');
    }

    getLoggedUser(): User {
        return JSON.parse(localStorage.getItem('musicUser'));
    }
}
