import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {delay, dematerialize, filter, materialize, mergeMap} from "rxjs/operators";
import { User } from "../models/user.interface";

const users: User[] = [{ id: 1, username: 'test', password: 'test' }];

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

    constructor(private http: HttpClient) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

         return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) 
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            if (url.endsWith('/users/authenticate') && method === 'POST') {
                  return authenticate();
            }
            return next.handle(request);  
        }

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                token: 'fake-jwt-token'
            })
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message: string) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer music-token';
        }
    }
}