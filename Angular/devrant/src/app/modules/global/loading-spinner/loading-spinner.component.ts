import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  show = false;
private subscription: Subscription;
constructor(
        private loaderService: LoaderService
    ) { }
ngOnInit() { 
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
            });
    }
ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
