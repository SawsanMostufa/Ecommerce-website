import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/Component/User/user/Models/user';
import { environment } from 'src/environments/environment';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private isLoggedSubject:BehaviorSubject<boolean>;
  baseUrl = environment.baseUrl;
  // private currenUserSource = new ReplaySubject<IUser>(1);
  // currentUser$ = this.currenUserSource.asObservable();
  constructor(private http: HttpClient,private router: Router) { 
    this.isLoggedSubject=new BehaviorSubject<boolean>(this.isUserLogged);
  }

  // loadCurrenyUser(token: string){
  //   debugger
  //   if(token === null){
  //     this.currenUserSource.next(undefined);
  //     return undefined;
  //   }
  //   debugger
  //   return this.http.get(this.baseUrl + 'account/getCurrentUser')
  //   .pipe(
  //     map((user: any) => {
  //       console.log(user)
  //       if(user){
  //         localStorage.setItem("token",user.token);
  //         this.currenUserSource.next(user);
  //       }
  //     })
  //   );
 // }

  getCurrentUser()
   {
    debugger
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
  get isUserLogged():boolean
  {
    return localStorage.getItem('token')?true : false;
  }
  getloggedStatus():Observable<boolean>
  {
    return this.isLoggedSubject.asObservable();
  }
}
