import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { AppConstants } from './modules/service/constants';

interface myData{
  ok: boolean,
  error: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = localStorage.getItem('loggedInStustus') || false;
  private accessToken = localStorage.getItem('accessToken') || '';

  constructor(private http: HttpClient) { }

  setLoggedIn(valueStatus: boolean, token:string){
    this.loggedInStatus = valueStatus;
    localStorage.setItem('loggedInStustus', 'true');

    this.accessToken = token;
    localStorage.setItem('accessToken', token.toString());
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedInStustus') || this.loggedInStatus.toString());
  }

  get myToken(){
    return JSON.parse(localStorage.getItem('loggedInStustus') || this.accessToken.toString());
  }

  getUserDetails(username, password){
    return this.http.post<myData>(AppConstants.API_ENDPOINT+AppConstants.API_USER_ACTIVATE, {
      username,
      password
    });
    
  }
}
