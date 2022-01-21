import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './components/auth/auth.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthInterceptor } from './components/auth/auth-interceptor';
import { IsLoggedInGuard } from './components/auth/is-logged-in-guard.service';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { AuthDialogService } from './components/auth/auth-dialog/auth-dialog.service';

import { NotificationService } from './services/notification.service';
import { ServiceBase } from './services/service-base.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboard',
    canActivate: [IsLoggedInGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard-web3',
    canActivate: [IsLoggedInGuard],
    loadChildren: () => import('./modules/dashboard-web3/dashboard-web3.module').then(m => m.DashboardWeb3Module)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AuthModule,
    NavbarModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthDialogService,
    AuthService,
    NotificationService,
    ServiceBase,
    IsLoggedInGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true // Dont override existing interceptors. Add this as a new one.
    },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
