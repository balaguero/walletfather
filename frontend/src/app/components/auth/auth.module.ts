import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingModule } from '../loading/loading.module';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { RegisterComponent } from './auth-dialog/register/register.component';
import { SigninComponent } from './auth-dialog/signin/signin.component';

// Services
import { IsNotLoggedInGuard } from './is-not-logged-in-guard.service';

@NgModule({
    declarations: [
        SigninComponent,
        RegisterComponent,
        AuthDialogComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        LoadingModule,
        MatProgressSpinnerModule
    ],
    providers: [
        IsNotLoggedInGuard
    ],
    exports: [
    ],
    // https://stackoverflow.com/questions/41519481/angular2-material-dialog-has-issues-did-you-add-it-to-ngmodule-entrycomponent
    entryComponents: [AuthDialogComponent]
})
export class AuthModule { }
