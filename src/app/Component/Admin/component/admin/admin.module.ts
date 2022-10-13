import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboartComponent } from './dashboart/dashboart.component';
import { CategoryComponent } from './dashboart/category/category.component';
import { MyprofileComponent } from './dashboart/myprofile/myprofile.component';
import { ProductComponent } from './dashboart/product/product.component';
import { OrderComponent } from './dashboart/order/order.component';
import { UserComponent } from './dashboart/user/user.component';



@NgModule({
  declarations: [
    DashboartComponent,
    CategoryComponent,
    MyprofileComponent,
    ProductComponent,
    OrderComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
