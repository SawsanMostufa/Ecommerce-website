import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SectionHeaderComponent } from './component/section-header/section-header.component';
import { LoginComponent } from './auth/login/login.component';
import { SliderComponent } from './component/Home/slider/slider.component';
import { FeaturedProductComponent } from './component/Home/featured-product/featured-product.component';
import { HomeComponent } from './component/Home/home/home.component';
import { CategoryComponent } from './component/Home/category/category.component';
import { ProductComponent } from './component/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './component/Shop/shop/shop.component';
import { PagerComponent } from './component/Home/pager/pager.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './Services/account.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Interseptor/token.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

// import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  
  {path: 'product', component:ProductComponent },
  {path: 'shop', component:ShopComponent },
  
  {path: 'login', component:LoginComponent}, 


];
//shared/product
@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
    SectionHeaderComponent,
    SliderComponent,
    FeaturedProductComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    ShopComponent,
    PagerComponent,
    SpinnerComponent,
   
  
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  //  HttpClientModule
   
  ],
  exports:[
    NavBarComponent,
    SectionHeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent
   
  ],
 

})
export class SharedModule { }
