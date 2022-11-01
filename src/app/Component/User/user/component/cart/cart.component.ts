import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/Component/Shared/shared/Models/basket';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartproduct:any[]=[];
  imageUrl = environment.imagesUrl + "Images/Products/";
  total:any=0;
  constructor() { }

  ngOnInit(): void {
     this. getCartProduct()
     
  }
 getCartProduct()
 {
  if('cart' in localStorage)
 {
  this.cartproduct= JSON.parse(localStorage.getItem('cart')!) 
    this.basketTotalPrice();
 }
//  console.log('this.cartproduct')
//  console.log(this.cartproduct)
 }
 
 basketTotalPrice(){
  this.total=0;
  for(var item in this.cartproduct)
  {
    
    this.total+= this.cartproduct[item].price * this.cartproduct[item].quantity
    
  }
  }
  removeBasketItem(index: number){
    debugger
    this.cartproduct.splice(index , 1);
    localStorage.setItem('cart',JSON.stringify(this.cartproduct))

  }
}
