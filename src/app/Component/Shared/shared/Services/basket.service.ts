import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket } from '../Models/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public cartItemList = new BehaviorSubject<any>([]);
  baseUrl = 'http://localhost:40029/api/';
  // private basketSource = new BehaviorSubject<Basket>(null);
  constructor(private httpClient:HttpClient) { }

  getProducts(): Observable<any>{
    let cartLocalStorage = localStorage.getItem('cart'); 
    if(cartLocalStorage){                                  
      //return Observable.of(cartLocalStorage);
      this.cartItemList.next(cartLocalStorage);
      return this.cartItemList.asObservable();
    }
    else{
      return this.cartItemList.asObservable();
    } 
  }

  setProduct(data: any){
    localStorage.setItem('cart', JSON.stringify(data)); 
  }

  getCurrentBasketValue(){
    
    return localStorage.getItem('cart');

  }

  getBasket(){
    let cartLocalStorage = localStorage.getItem('basket');
    if(cartLocalStorage){
      //return Observable.of(cartLocalStorage);
      // this.basketSource.next(cartLocalStorage);
      // this.calculateTotals();
    }
  }
}
