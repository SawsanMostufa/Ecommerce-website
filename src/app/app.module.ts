import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/Shared/shared/component/footer/footer.component';
import { NavBarComponent } from './Component/Shared/shared/component/nav-bar/nav-bar.component';
import { SectionHeaderComponent } from './Component/Shared/shared/component/section-header/section-header.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    SectionHeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
