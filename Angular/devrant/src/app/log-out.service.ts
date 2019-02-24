import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from './modules/service/constants';
import { AuthService } from './modules/login/auth.service';

interface myData{
  ok: boolean,
  error: string
}

@Injectable({
  providedIn: 'root'
})
export class LogOutService {


  constructor(private http: HttpClient,
    private auth: AuthService) { }


  singOutUser(){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Token': this.auth.myToken
      })
    };
    return this.http.post<myData>(AppConstants.API_ENDPOINT+AppConstants.API_USER_DEACTIVATE, null, httpOptions);
    
  };
}
