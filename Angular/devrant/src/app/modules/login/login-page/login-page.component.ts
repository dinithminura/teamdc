
import { LoginPopupService } from './login-page.service';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { LoaderService } from '../../global/loading-spinner/loader.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ValidationService } from 'src/app/validation.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userForm: any;
  @ViewChild('userName') userName: ElementRef;

  constructor(private loginPopupService: LoginPopupService, 
    private loaderService: LoaderService, 
    private formBuilder: FormBuilder, 
    private authService: AuthService) { }

  login: boolean=false;
  logout:boolean=true;
  hideInputField: boolean = true;

  
  ngOnInit() {
    this.loginPopupService.status.subscribe((val: boolean) => {
      this.login = val;
      this.logout = !val;
      });

  
      this.userForm = this.formBuilder.group({
        'name': ['', ValidationService.userNameValidator],
        'password': ['', [ ValidationService.passwordValidator]]
      });
  
      console.log(this.userForm);
  }

  saveUser() {
    
    if (this.userForm.dirty && this.userForm.valid) {
      this.hideInputField = false;
      this.loaderService.showLoader(true);
      // alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
      const userName = this.userForm.value.name;
      const password = this.userForm.value.password;
      console.log(userName, password);
      this.authService.getUserDetails(userName, password).subscribe(data => {
        this.loaderService.showLoader(false);
        if(data.ok){

        } else {
          // window.alert(data.error);
        }
      })
    }
  }

  onClickCancel(): void{
    this.hideInputField = true;

    this.userForm.reset();
    
    // this.userName.nativeElement.focus();
  
    this.login = false;
  }

  onClickLetMeIn(): void{
    // this.loaderService.showLoader(true);
  }

}
