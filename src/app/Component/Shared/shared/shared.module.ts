import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SectionHeaderComponent } from './component/section-header/section-header.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports:[
    NavBarComponent,
    SectionHeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
