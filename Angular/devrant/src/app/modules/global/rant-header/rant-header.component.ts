import { Component, OnInit, HostListener } from '@angular/core';
import { LoginPopupService } from '../../login/login-page/login-page.service';
import { HeaderPageService } from 'src/app/header-page.service';
import { AuthService } from '../../login/auth.service';
import { LogOutService } from 'src/app/log-out.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rant-header',
  templateUrl: './rant-header.component.html',
  styleUrls: ['./rant-header.component.css']
})
export class RantHeaderComponent implements OnInit {

  join: boolean = true;
  JoinOrSingOut: string = "Join";


  constructor(private loginPopupService: LoginPopupService, private headerService: HeaderPageService,
    private auth: AuthService,
    private logout: LogOutService,
    private rout: Router) { }

  ngOnInit() {
    this.headerService.status.subscribe((val: string) => {
      this.JoinOrSingOut = val;
    });

    if (this.auth.isLoggedIn) {
      this.JoinOrSingOut = "Sing Out";
      this.join = false;
    }
    else {
      this.JoinOrSingOut = "Join";
      this.join = true;
    }
  }

  onClickJoin() {
    if (this.join) this.loginPopupService.login(true);
    else {
      this.logout.singOutUser().subscribe(data => {
      if (data.ok) {
        this.auth.setLoggedIn(false, "");
        this.headerService.changeHeader("Join");
        this.rout.navigate([''])
      } else {
        // window.alert(this.errorService.getErrorMessage( data.error));
      }
    });}

  }
}
