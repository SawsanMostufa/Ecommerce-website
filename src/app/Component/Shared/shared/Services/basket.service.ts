import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket } from '../Models/basket';
import { Iproduct } from '../Models/iproduct';
import { Size } from '../Models/size';
import{IOrderItem,IOrderToCreate}from'../Models/iorder';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  // public cartItemList = new BehaviorSubject<any>([]);
  // private basketSource = new BehaviorSubject<Basket>(null);
   baseUrl = 'http://localhost:40029/api/';
  constructor(private httpClient:HttpClient) { }


  checkProductQtyAva(product: Iproduct,qtyReq: number,size:string): any {
    return  this.httpClient.get(this.baseUrl + 'Product/checkProductQtyAva?productId='+product.id+ '&qtyReq='+ qtyReq);
     
  }
  addItemToBasket(item: Iproduct,  quantity = 1, size:string){
    const itemToAdd: IOrderItem = this.mapPRoductItemToBasketItems(item, quantity,size);
   
    // const basket = this.getCurrentBasketValue() ??  this.createBasket();
   
    // basket.items = this.addOrUpdateItems(basket.items, itemToAdd, quantity);
    // this.setBasket(basket);
    // console.log(basket.items);
  }
  private mapPRoductItemToBasketItems(item:  Iproduct, quantity: number, size:string): IOrderItem {
    // console.log(item.productSizes);
    
    return {
      productId: item.id,
      productName: item.name,
      productSizes:item.productSizes,
      pictureUrl: item.pictureUrl,
      category: item.category,
    };

  }
  
 

  // getProducts(): Observable<any>{
  //   let cartLocalStorage = localStorage.getItem('cart'); 
  //   if(cartLocalStorage){                                  
  //     //return Observable.of(cartLocalStorage);
  //     this.cartItemList.next(cartLocalStorage);
  //     return this.cartItemList.asObservable();
  //   }
  //   else{
  //     return this.cartItemList.asObservable();
  //   } 
  // }

  // setProduct(data: any){
  //   localStorage.setItem('cart', JSON.stringify(data)); 
  // }

  getCurrentBasketValue(){
    
    return localStorage.getItem('cart');

  }

  // private createBasket(): IOrderToCreate {
  //   const basket = new Basket();
  //   //localStorage.setItem('basket_id',basket.id);
  //   return basket;
  // }
  // getBasket(){
  //   let cartLocalStorage = localStorage.getItem('basket');
  //   if(cartLocalStorage){
      //return Observable.of(cartLocalStorage);
      // this.basketSource.next(cartLocalStorage);
      // this.calculateTotals();
    // }
  // }
}
