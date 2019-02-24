import { Component, OnInit, HostListener } from '@angular/core';
import { LoginPopupService } from '../../login/login-page/login-page.service';
import { HeaderPageService } from 'src/app/header-page.service';
import { AuthService } from '../../login/auth.service';
import { LogOutService } from 'src/app/log-out.service';
import { Router } from '@angular/router';
import { join } from 'path';

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

    this.headerService.isJoin.subscribe((val: boolean) => {
      this.join = val;
    });

    if (this.auth.isLoggedIn) {
     this.headerService.changeHeader("Sing Out", false);
    }
    else {
      this.headerService.changeHeader("Join", true);
    }
  }

  onClickJoin() {
    if (this.join) this.loginPopupService.login(true);
    else {this.logout.singOutUser().subscribe(data => {
      if (data.ok) {
        this.auth.setLoggedIn(false, "");
        this.headerService.changeHeader("Join", true);
        this.rout.navigate([''])
      } else {
        // window.alert(this.errorService.getErrorMessage( data.error));
      }
    });
  }
  }
}
