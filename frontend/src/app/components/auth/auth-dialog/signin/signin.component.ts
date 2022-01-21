import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

// App Services
import { AuthService } from './../../../../services/auth.service';
import { NotificationService } from './../../../../services/notification.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit, OnDestroy {

    @Input() hideRegisterButton = false;
    @Input() alternativeText: String = null;
    @Output() loginCompleted = new EventEmitter();
    @Output() registerButtonClicked = new EventEmitter();
    @Output() forgetPasswordClicked = new EventEmitter();
    @Output() popupOverlayEmit = new EventEmitter();

    public redirectUrl: String = '';
    public isLoggedIn: Boolean;
    public loginError: String = '';
    public isLoading: Boolean = false;
    private isLoggedInSubscription: Subscription;
    public loginForm = new FormGroup({
        email: new FormControl(null, [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]),
        password: new FormControl(null, Validators.required)
    });

    constructor(
        private _authService: AuthService,
        private notificationService: NotificationService,
        private _router: Router
    ) { }

    ngOnInit(): void {
        // Subscribe to Behavior Subject and update value dynamically
        this.isLoggedInSubscription = this._authService.isLoggedIn.subscribe((next: Boolean) => {
            this.isLoggedIn = next;
        });
    }

    ngOnDestroy(): void {
        this.isLoggedInSubscription.unsubscribe();
    }

    public onSubmit(): void {
        if (this.loginForm.invalid || this.loginForm.pristine) {
            return;
        }

        this.loginForm.markAsPristine();
        const user = { email: this.loginForm.value.email, password: this.loginForm.value.password };
        this.loginError = '';
        this.isLoading = true;
        this._authService.signin(user)
            .then(() => {
                this.loginComplete();
            })
            .catch(() => {
                _.get(this.loginForm.controls, 'password').setValue(undefined);
                _.get(this.loginForm.controls, 'password').markAsUntouched();
                this.loginError = 'Email or password are wrong.';
                this.notificationService.showNotification('error', this.loginError);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    public onRegisterClick(): void {
        this.registerButtonClicked.emit();
    }

    public onForgetPassword(): void {
        this.forgetPasswordClicked.emit();
    }

    public loginComplete(): void {
        this.loginForm.reset();
        this.notificationService.showNotification('success', 'Successfully logged in');
        this.loginCompleted.emit();
    }

    public showHideOverlay(): void {
        this.popupOverlayEmit.emit();
    }
}
