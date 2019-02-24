import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }

  showLoader: boolean=false;
  logout:boolean=true;
  
  ngOnInit() {
    console.log("loading close")
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
      });
  }

}
