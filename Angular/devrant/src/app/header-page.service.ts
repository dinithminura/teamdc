import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderPageService {

  public status: Rx.BehaviorSubject<string> = new Rx.BehaviorSubject<string>("Join");
 
    changeHeader(value: string) {
    this.status.next(value);
    }
}
