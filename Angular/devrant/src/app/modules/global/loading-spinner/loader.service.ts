import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/BehaviorSubject';

@Injectable()

export class LoaderService {

    public status: Rx.BehaviorSubject<boolean> = new Rx.BehaviorSubject<boolean>(false);
 
    showLoader(value: boolean) {
    this.status.next(value);
    }
}