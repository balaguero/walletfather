import * as _ from 'lodash';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

// Services
import { AuthService } from './../../services/auth.service';

// This is a middleware function, same as node.js middlewares but for outgoing requests (Not upcoming as node.js does).
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const authToken = this._authService.getToken();
        let authRequest;

        if (authToken) {
            authRequest = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + authToken)
            });
        } else {
            authRequest = req.clone();
        }

        return next
            .handle(authRequest)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && _.get(error, 'error.errorCode') === 'user-helper-1') {
                        this._authService.logout();
                    }
                    return throwError(error);
                })
            );
    }
}
