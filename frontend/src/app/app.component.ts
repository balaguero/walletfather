import { NotificationService } from './services/notification.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

// Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Waletfather';
  public notificationServiceSubscription: Subscription;

    constructor(
        public snackBar: MatSnackBar,
        private _notificationService: NotificationService
    ) {}

    ngOnInit(): void {
        this.notificationServiceSubscription = this._notificationService.subj_notification.subscribe(data => {
            if (_.isNil(data.type)) {
                data.type = 'info';
            }
            const classMap = {
                success: 'snackbar-success',
                error: 'snackbar-error',
                warning: 'snackbar-warning',
                info: 'snackbar-info'
            };
            this.snackBar.open(data.message, data.action, {
                duration: 5000,
                panelClass: [classMap[data.type]]
            });
        });
    }
}
