import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './Component/Shared/shared/shared.module';
import { AdminModule } from './Component/Admin/component/admin/admin.module';
import { AdminRoutingModule } from './Component/Admin/component/admin/admin-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
