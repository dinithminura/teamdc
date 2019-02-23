import { Component, OnInit, HostListener } from '@angular/core';
import { LoginPopupService } from '../../login/login-page/login-page.service';

@Component({
  selector: 'app-rant-header',
  templateUrl: './rant-header.component.html',
  styleUrls: ['./rant-header.component.css']
})
export class RantHeaderComponent implements OnInit {

  join: boolean = false;

  constructor(private loginPopupService: LoginPopupService) { }

  ngOnInit() {
  }
  
  onClickJoin() {
    this.loginPopupService.login(true);
    
  }
}
