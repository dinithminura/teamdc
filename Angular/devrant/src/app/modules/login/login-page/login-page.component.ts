
import { LoginPopupService } from './login-page.service';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { LoaderService } from '../../global/loading-spinner/loader.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userForm: any;
  @ViewChild('userName') userName: ElementRef;

  constructor(private loginPopupService: LoginPopupService, private loaderService: LoaderService, private formBuilder: FormBuilder) { }

  login: boolean=false;
  logout:boolean=true;
  
  ngOnInit() {
    this.loginPopupService.status.subscribe((val: boolean) => {
      this.login = val;
      this.logout = !val;
      });

  
      this.userForm = this.formBuilder.group({
        'name': ['', ValidationService.userNameValidator],
        'email': ['', [ ValidationService.passwordValidator]]
      });
  
      console.log(this.userForm);
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }

  onClickCancel(): void{
    this.userForm.reset();
    // this.userName.nativeElement.focus();
  
    this.login = false;
  }

  onClickLetMeIn(): void{
    this.loaderService.showLoader(true);
  }

}
