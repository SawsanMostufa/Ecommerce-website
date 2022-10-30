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

// import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  
  {path: 'product', component:ProductComponent },
  // {path: 'category', component:ProductComponent },
  {path: 'shop', component:ShopComponent }
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
   
  
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  //  HttpClientModule
   
  ],
  exports:[
    NavBarComponent,
    SectionHeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent
   
  ]
})
export class SharedModule { }
