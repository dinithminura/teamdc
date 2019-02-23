
import { LoginPopupService } from './login-page.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {



  constructor(private loginPopupService: LoginPopupService) { }

  // @Output()notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  login: boolean=false;
  logout:boolean=true;
  
  ngOnInit() {
    console.log("gduhdfshf");
    this.loginPopupService.status.subscribe((val: boolean) => {
      this.login = val;
      this.logout = !val;
      console.log("stttttaststtst");
      // if(this.login){
      // // this.username=this.storage.getStorageData('username');
      // }
      });
  }


  onClickCancel(): void{
    this.login = false;
  }
  // private toggleText: string = "Show";
    // private show: boolean = false;

    // public onToggle(): void {
    //     this.show = !this.show;
    //     // this.toggleText = this.show ? "Hide" : "Show";
    // }

}
