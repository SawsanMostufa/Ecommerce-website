import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';
import {map} from 'rxjs/operators';
import { product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpclient:HttpClient) { }

  GetProduct():Observable<any>
  {
    return this.httpclient.get<any>(`${environment.baseUrl}Product/getProducts`);
    // .pipe(
    //   map(
    //     data => { return new product(
    //       // data.id
        
    //     );}
    //   )
    // )
    // .subscribe(
    //   data => console.log('data: ',data)
    // );
    // debugger
    // return prd;
  }

  // GetProductByCatID(catID:any):Observable<any>
  // {
  //   return this.httpclient.get<any>(`${environment.baseUrl}Product?getCategor=${catID}`);
  // }

  GetProductID(id:number):Observable<any>
  {
    return this.httpclient.get<any>(`${environment.baseUrl}Product/getProduct/${id}`);
    
  }

  // addProduct(newprd:Iproduct):Observable<Iproduct>
  // {
  //    this.httpclient.post<Iproduct>(`${environment.baseUrl}Product',);
    
  // }
}
