import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboartComponent } from './dashboart/dashboart.component';

import { MyprofileComponent } from './dashboart/myprofile/myprofile.component';
import { ProductComponent } from './dashboart/product/product.component';
import { OrderComponent } from './dashboart/order/order.component';
import { UserComponent } from './dashboart/user/user.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    DashboartComponent,
    MyprofileComponent,
    ProductComponent,
    OrderComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
