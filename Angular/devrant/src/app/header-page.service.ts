import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderPageService {

  public status: Rx.BehaviorSubject<string> = new Rx.BehaviorSubject<string>("Join");
  public isJoin: Rx.BehaviorSubject<boolean> = new Rx.BehaviorSubject<boolean>(true);
 
    changeHeader(value: string, isJoin:boolean) {
    this.status.next(value);
    this.isJoin.next(isJoin);
    }
}
