import { Injectable } from '@angular/core';

// Angular Material Modules
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from './auth-dialog.component';

@Injectable()
export class AuthDialogService {

    constructor(
        public dialog: MatDialog
    ) { }

    openAuthDialog(mode, hideRegisterButton?, redirectURL?: String, alternativeText = { login: null, register: null }, callback?, allowClick = false, onlyRecovery?): void {
        this.dialog.open(AuthDialogComponent, {
            width: '400px',
            data: {
                mode,
                hideRegisterButton,
                redirectURL,
                alternativeText,
                callback,
                onlyRecovery
            },
            id: 'auth-dialog',
            disableClose: allowClick
        });
    }

    openLoginDialog(): void {
        this.openAuthDialog('LOGIN');
    }
}
