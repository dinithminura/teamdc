import { Component, OnInit, HostListener } from '@angular/core';
import { LoginPopupService } from '../../login/login-page/login-page.service';
import { HeaderPageService } from 'src/app/header-page.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-rant-header',
  templateUrl: './rant-header.component.html',
  styleUrls: ['./rant-header.component.css']
})
export class RantHeaderComponent implements OnInit {

  join: boolean = true;
  JoinOrSingOut:string = "Join";


  constructor(private loginPopupService: LoginPopupService, private headerService: HeaderPageService,
    private auth: AuthService) { }

  ngOnInit() {
    this.headerService.status.subscribe((val: string) => {
      this.JoinOrSingOut = val;
      });

      if(this.auth.isLoggedIn) {
        this.JoinOrSingOut = "Sing Out";
        this.join = false;
      }
      else {
        this.JoinOrSingOut = "Join";
        this.join = true;
      }
  }
  
  onClickJoin() {
    this.loginPopupService.login(true);
    
  }
}
