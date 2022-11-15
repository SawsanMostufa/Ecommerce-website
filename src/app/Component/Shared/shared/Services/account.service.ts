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

  getCurrentUser()
   {
    return this.http.get(this.baseUrl + 'account/getCurrentUser')
  
  
  }
  logout(){
    localStorage.removeItem('token');
    // this.currenUserSource.next(null);
    this.router.navigateByUrl('/');
  }
 
  checkEmailExsist(email: string){
    return this.http.get(this.baseUrl + 'account/emailExsist?email='+ email);
  }

  login(user: any){
    debugger
    return this.http.post(this.baseUrl + 'account/login', user)
   
  }

  register(user: any){
    debugger
    return this.http.post(this.baseUrl + 'account/register', user)
      
  }

  gettoken()
  {
    return localStorage.getItem('token');
 
  }

  
}
