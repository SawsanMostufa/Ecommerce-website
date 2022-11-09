import { Component, Input, OnInit, SimpleChanges,OnChanges } from '@angular/core';
import { IBasket } from 'src/app/Component/Shared/shared/Models/basket';
import { Iorder, IOrderItem, IOrderToCreate } from 'src/app/Component/Shared/shared/Models/iorder';
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
  cartproduct:any[]=[];
  orderss!:IOrderItem;
  constructor( private orderService:OrderService , private basketService:BasketService) { }
  
   ngOnChanges(changes: SimpleChanges): void {
    
    }
  ngOnInit(): void {
    
  }
  updateTotalPrice(totalPrice:number )
  {
    this.recevedTotalPrice=totalPrice;
  }

  
  submitOrder(){
    debugger
    const basket=this.basketService.getCurrentBasketValue();
    console.log(basket)
    const orderToCreate = this.getOrderToCreate(basket);
    console.log(orderToCreate)
  this.orderService.createOrder(orderToCreate).subscribe((order:any) => {
    this.cartproduct=[];
    // this.orderss=order
    alert("Order submitted successfully");
    console.log("order");
    console.log(order);
    // console.log(this.orderss);
  })
}
getOrderToCreate(basket: IBasket) {
  debugger
  let orderItems = this.basketService.getCurrentBasketValue();
  console.log(orderItems)
  orderItems.forEach((element:any)=>{
    element.total = element.price * element.quantity;
 });

  return {
    orderItems : orderItems
  };
}
}