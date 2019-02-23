
import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginPopupService {

    public status: Rx.BehaviorSubject<boolean> = new Rx.BehaviorSubject<boolean>(false);
 
    login(value: boolean) {
    this.status.next(value);
    }

}