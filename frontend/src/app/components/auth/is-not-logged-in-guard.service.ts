import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// Services
import { AuthService } from './../../services/auth.service';

@Injectable()
export class IsNotLoggedInGuard implements CanActivate {
    constructor(private _authService: AuthService) { }

    canActivate(): boolean {
        return <boolean>!this._authService.checkIsLoggedIn();
    }
}
