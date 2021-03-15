import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { User } from "../models/user.interface";

const users: User[] = [{ id: 1, username: 'admin', password: 'admin' }, {id: 2, username: 'user', password: 'user'}];

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

    constructor(private http: HttpClient) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<User>> {
         return this.handleRoute(request, next);
    }

    private handleRoute = (request: HttpRequest<User>, next: HttpHandler) => {
        const { url, method, body } = request;
        if (url.endsWith('/users/authenticate') && method === 'POST') {
              return this.authenticate(body);
        }
        return next.handle(request);  
    }

    private authenticate = (body: User) => {
        const { username, password } = body;
        const user = users.find(x => x.username === username && x.password === password);
        if (!user) {
            return this.error('Username or password is incorrect');
        }
        return this.ok({
            id: user.id,
            username: user.username,
            token: 'music-token'
        })
    }

    private ok = (body?) => {
        return of(new HttpResponse({ status: 200, body }))
    }

    private error = (message: string) => {
        return throwError({ error: { message } });
    }

    private unauthorized = () => {
        return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    private isLoggedIn = (headers) => {
        return headers.get('Authorization') === 'Bearer music-token';
    }
}