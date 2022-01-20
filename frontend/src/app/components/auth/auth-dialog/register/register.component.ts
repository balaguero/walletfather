import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

// Services
import { AuthService } from './../../../../services/auth.service';
import { NotificationService } from './../../../../services/notification.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit, OnDestroy {

    public isLoggedIn: Boolean = false;
    private isLoggedInSubscription: Subscription;
    public currentURL: any;
    public registerForm: FormGroup;
    public isLoading: Boolean = false;
    lodash = _;

    @Input() alternativeText: String;
    @Output() registerCompleted = new EventEmitter();
    @Output() loginButtonClicked = new EventEmitter();
    @Output() changeUserLoginMode = new EventEmitter();

    constructor(
        private _authService: AuthService,
        private fb: FormBuilder,
        private notificationService: NotificationService
    ) {
        this.registerForm = fb.group({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
            ]),
            password: new FormControl(null, [
                Validators.minLength(10),
                Validators.required
            ]),
            confirmPassword: new FormControl(null, [
                Validators.minLength(10),
                Validators.required
            ])
        }, {
            validator: this.passwordMatchValidator // your validation method
        });
    }

    passwordMatchValidator(AC: AbstractControl): any {
        const password = AC.get('password').value; // to get value in input tag
        const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        } else {
            return null;
        }
    }

    ngOnInit(): void {
        this.currentURL = document.location.pathname;
        // Subscribe to Behavior Subject and update value dynamically
        this.isLoggedInSubscription = this._authService.isLoggedIn.subscribe(next => {
            this.isLoggedIn = next;
        });
    }

    ngOnDestroy(): void {
        this.isLoggedInSubscription.unsubscribe();
    }

    public onLoginClick(): void {
        this.loginButtonClicked.emit();
    }

    public onSubmit(): void {
        if (!this.registerForm.valid) {
            return;
        }

        this.isLoading = true;
        this._authService.signup(this.registerForm.value)
            .then(() => {
                // YEAH! we have a new user.
                // Login USER
                this._authService.signin(this.registerForm.value)
                    .then(() => {
                        this.notificationService.showNotification('success', 'Cuenta creada correctamente. Sesión iniciada.');
                        this.registerCompleted.emit();
                    })
                    .catch(() => {
                        this.notificationService.showNotification('warning', 'Cuenta creada correctamente. Haga click en el boton ingresar.');
                        this.registerCompleted.emit();
                    })
                    .finally(() => this.isLoading = false);
            })
            .catch(error => {
                // Can't create a new user. Check if user exists or handle error
                if (_.get(error, 'error.error') === 'USER_ALREADY_CREATED_PLEASE_LOGIN') {
                    _.get(this.registerForm.controls, 'email').setValue(undefined);
                    this.notificationService.showNotification('error', 'Email en uso. Elija otra dirección de email.');
                } else if (_.get(error, 'statusText') === 'Too Many Requests') {
                    this.notificationService.showNotification('error', _.get(error, 'error.error'));
                } else {
                    this.notificationService.showNotification('error', 'Hubo un error al crear su cuenta. Intente nuevamente.');
                }
            })
            .finally(() => {
                setTimeout(() => {
                    this.isLoading = false;
                }, 600);
            });
    }

    /**
     * @method enableSignInMode
     * 
     * @description Emit an event to auth.dialog component and enable the Sign In mode
     */
    public enableSignInMode(): void {
        this.changeUserLoginMode.emit();
    }
}
