import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket, IBasket } from '../Models/basket';
import { Iproduct } from '../Models/iproduct';
import { Size } from '../Models/size';
import { IOrderItem, IOrderToCreate } from '../Models/iorder';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  // public cartItemList = new BehaviorSubject<any>([]);
  // private basketSource = new BehaviorSubject<Basket>(null);

  countCart: any[] = [];
  cartItem: number = 0;
  product!: Iproduct;
  quantity = 1;
  cartproducts: any[] = [];
  index: any;
  count: number = 0;
  id: any;
  cartSubject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }


  checkProductQtyAva(product: Iproduct, qtyReq: number): any {
    debugger
    return this.httpClient.get(`${environment.baseUrl}Product/checkProductQtyAva?productId=` + product.id + '&qtyReq=' + qtyReq);
  }
  
  cartItemNumber() {

    if ('cart' in localStorage) {

      this.countCart = JSON.parse(localStorage.getItem('cart')!)
      return this.cartItem = this.countCart.length;

    }

    return 0;
  }

  getAndSetItemFromBasket() {

    if ('cart' in localStorage) {

      this.cartproducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartproducts.find(item => item.id == this.product.id)
      if (exist) {
        this.index = this.cartproducts.findIndex(x => x.id === this.product.id);

        this.cartproducts[this.index].quantity += this.quantity;
        localStorage.setItem('cart', JSON.stringify(this.cartproducts))
      }
      else {
        this.cartproducts.push(this.product)
        localStorage.setItem('cart', JSON.stringify(this.cartproducts))
      }

    }
    else {
      this.cartproducts.push(this.product)
      this.setItemInBasket();
    }

  }

  getCurrentBasketValue() {

    return JSON.parse(localStorage.getItem('cart')!)
  }

  setItemInBasket() {
    localStorage.setItem('cart', JSON.stringify(this.cartproducts))
  }

}





