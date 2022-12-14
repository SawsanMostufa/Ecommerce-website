import { Component, Input, OnInit, SimpleChanges,OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/Component/Shared/shared/Models/basket';
import { Iorder, IOrderItem, IOrderToCreate } from 'src/app/Component/Shared/shared/Models/iorder';
import { Login } from 'src/app/Component/Shared/shared/Models/login';
import { BasketService } from 'src/app/Component/Shared/shared/Services/basket.service';
import { OrderService } from 'src/app/Component/Shared/shared/Services/order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  image = environment.imagesUrl + "Images/Products/";
  recevedTotalPrice:any;
  basketItems!: IBasket;
  basketlist!:IBasket;
  countCart:number=0;
 
  constructor( private orderService:OrderService , private basketService:BasketService) { }
  
   ngOnChanges(changes: SimpleChanges): void {
    
    }
  ngOnInit(): void {
    this.basketlist = JSON.parse(localStorage.getItem('cart')!)
  }
 

  updateTotalPrice(totalPrice:number )
  {
    this.recevedTotalPrice=totalPrice;
  }

  submitOrder(){
     debugger

     const basket=this.basketService.getCurrentBasketValue();
     const orderToCreate = this.getOrderToCreate(basket);
   
  this.orderService.createOrder(orderToCreate).subscribe((order:any) => {
   
     localStorage.removeItem('cart')
     this.basketService.cartSubject.next(0);
     alert("Order submitted successfully");
  
  })
}
getOrderToCreate(basket: IBasket) {
  debugger
    let orderItems = this.basketService.getCurrentBasketValue().items;
  return {
    orderItems : orderItems
  };
}
}