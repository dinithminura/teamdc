
import { LoginPopupService } from './login-page.service';
import { Component, OnInit, Inject } from '@angular/core';
import { LoaderService } from '../../global/loading-spinner/loader.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginPopupService: LoginPopupService, private loaderService: LoaderService) { }

  login: boolean=false;
  logout:boolean=true;
  
  ngOnInit() {
    console.log("gdussssssshdfshf");
    this.loginPopupService.status.subscribe((val: boolean) => {
      this.login = val;
      this.logout = !val;
      });
  }


  onClickCancel(): void{
    this.login = false;
  }

  onClickLetMeIn(): void{
    console.log("ggggggggggggrdrd")
    this.loaderService.showLoader(true);
  }

}
