import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,private router: Router) { }

  login(user: any){
    debugger
    return this.http.post(this.baseUrl + 'account/login', user)
    // if(user){
    // localStorage.setItem("token",user.token);
   
      
    // }
  }

  register(user: any){
    debugger
    return this.http.post(this.baseUrl + 'account/register', user)
      
  }
}
