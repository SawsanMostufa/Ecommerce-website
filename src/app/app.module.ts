import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './Component/Shared/shared/shared.module';
import { AdminModule } from './Component/Admin/component/admin/admin.module';
import { AdminRoutingModule } from './Component/Admin/component/admin/admin-routing.module';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountService } from './Component/Shared/shared/Services/account.service';
import { TokenInterceptor } from './Component/Shared/shared/Interseptor/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AdminModule,
    AdminRoutingModule,
    FormsModule,
   CommonModule,
   ReactiveFormsModule,
  //  NgModel
 
  ],
  providers: [
    AccountService , 
    {
     provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptor,
     multi: true
    },
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
