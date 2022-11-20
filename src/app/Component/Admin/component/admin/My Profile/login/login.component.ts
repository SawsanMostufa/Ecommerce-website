import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Component/Shared/shared/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  returnUrl!:string;
  constructor( private fb:FormBuilder, private accountService:AccountService,
                private router: Router) { }

  ngOnInit(): void {
   this.createLoginForm()
  }
 createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl('', Validators.required)
   });
 }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  onSubmit() {
    debugger
    this.accountService.login(this.loginForm.value).subscribe(
      (res:any) => {
        localStorage.setItem("token",res.token);
      this.router.navigateByUrl(this.returnUrl)
      alert('login is success')
  });
}
 

}
