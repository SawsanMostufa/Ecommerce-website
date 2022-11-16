import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './component/basket/basket.component';
import { CheckoutComponent } from './component/checkout/checkout/checkout.component';
import { CheckoutAddressComponent } from './component/checkout/checkout-address/checkout-address.component';
import { CheckoutReviewComponent } from './component/checkout/checkout-review/checkout-review.component';
import { CheckoutPaymentComponent } from './component/checkout/checkout-payment/checkout-payment.component';
import { CheckoutSuccessComponent } from './component/checkout/checkout-success/checkout-success.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { RegisterComponent } from './component/account/register/register.component';
import { UserprofileComponent } from './component/account/userprofile/userprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserShopComponent } from './component/user-shop/user-shop.component';
import { CartComponent } from './component/cart/cart.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckSuccesComponent } from './component/check-succes/check-succes.component';
import { AuthGuard } from '../../Shared/Gaurds/auth.guard';





const routes: Routes = [
 
  {path: 'userrofile', component:UserprofileComponent},
  
  {path: 'basket', component:BasketComponent},
  {path: 'usershop', component:UserShopComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'checkoutaddress', component:CheckoutAddressComponent,},
  {path: 'checkoutreview', component:CheckoutReviewComponent},
  {path: 'cleckoutpayment', component:CheckoutPaymentComponent},
  {path: 'cleckoutsuccess', component:CheckoutSuccessComponent,canActivate:[AuthGuard]},
  {path: 'productdetails/:id', component:ProductDetailsComponent},
  {path:  'cart', component:CartComponent},
  {path:  'contactUs', component:ContactUsComponent},
  {path:  'order-list', component:OrderListComponent},
  {path:  'register', component:RegisterComponent}




];


@NgModule({
  declarations: [
    BasketComponent,
    CheckoutComponent,
    CheckoutAddressComponent,
    CheckoutReviewComponent,
    CheckoutPaymentComponent,
    CheckoutSuccessComponent,
    OrderDetailsComponent,
    OrderListComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    RegisterComponent,
    UserprofileComponent,
    UserShopComponent,
    CartComponent,
    ContactUsComponent,
    CheckSuccesComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   RouterModule.forChild(routes)
    
  ],
 
})
export class UserModule { }
