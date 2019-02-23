import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { AppConstants } from './modules/service/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(userName, password){
    return this.http.post(AppConstants.API_ENDPOINT+AppConstants.API_USER_ACTIVATE, {
      userName,
      password
    });
    
  }
}
