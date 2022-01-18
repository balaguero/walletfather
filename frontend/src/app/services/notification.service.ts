import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
    
    public subj_notification: Subject<any> = new Subject();

    /**
     * 
     * @param type Notification Type: (SUCCESS, WARNING, DANGER)
     * @param message 
     * @param action 
     */
    public showNotification(type: String, message: String, action = null): void {
        this.subj_notification.next({type, message, action});
    }
    
}
