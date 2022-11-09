import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iorder } from 'src/app/Component/Shared/shared/Models/iorder';
import { OrderService } from 'src/app/Component/Shared/shared/Services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Iorder[] = [];
  constructor( private orderService:OrderService,  private router: Router) { }

  ngOnInit(): void {
    this. getOrders()
  }


  getOrders()
  {
    this.orderService.getOrders().subscribe((response:any[]) =>{
      this.orders=response;
      console.log(this.orders)
    })
  }

  // goToOrderDetails(order){
  //   this.router.navigate(['orders/', + order.id] );
  // }

}
