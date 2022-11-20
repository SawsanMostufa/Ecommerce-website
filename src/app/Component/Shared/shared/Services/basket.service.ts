import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket, BasketLis, IBasket } from '../Models/basket';
import { Iproduct } from '../Models/iproduct';
import { Size } from '../Models/size';
import { IOrderItem, IOrderToCreate } from '../Models/iorder';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
 
  // private basketSource = new BehaviorSubject<any>(null);
  // basket$ = this.basketSource.asObservable();

  countCart!: IBasket;
  cartItem: number = 0;
  product!: Iproduct;
  quantity = 1;
  cartproducts: IBasket[] = [];
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
    debugger
    if ('cart' in localStorage) {

      this.countCart = JSON.parse(localStorage.getItem('cart')!)
      this.cartItem= this.countCart.items.length;
      return this.cartItem;
      
    }
    return 0;
  }

  // getAndSetItemFromBasket() {

  //   if ('cart' in localStorage) {

  //     this.cartproducts = JSON.parse(localStorage.getItem('cart')!)
  //     let exist = this.cartproducts.find(item => item.id == this.product.id)
  //     if (exist) {
  //       this.index = this.cartproducts.findIndex(x => x.id === this.product.id);

  //       this.cartproducts[this.index].quantity += this.quantity;
  //       localStorage.setItem('cart', JSON.stringify(this.cartproducts))
  //     }
  //     else {
  //       this.cartproducts.push(this.product)
  //       localStorage.setItem('cart', JSON.stringify(this.cartproducts))
  //     }

  //   }
  //   else {
  //     this.cartproducts.push(this.product)
  //     this.setItemInBasket();
  //   }

  // }

  getCurrentBasketValue() {

    return JSON.parse(localStorage.getItem('cart')!)
  }

  setItemInBasket(basket:IBasket) {
    localStorage.setItem('cart', JSON.stringify(basket))
  }
   mapPRoductItemToBasketItems(item: Iproduct, quantity: number): Basket {
    // console.log(item.productSizes);
    
    return {
      productId: item.id,
      productName: item.name,
      price: item.price,

      productSizes:item.productSizes,
      // size:
      pictureUrl: item.pictureUrl,
      quantity,
      category: item.category
    };

  }
   createBasket(): IBasket {
    const basket = new BasketLis();
    //localStorage.setItem('basket_id',basket.id);
    return basket;
  }

}

