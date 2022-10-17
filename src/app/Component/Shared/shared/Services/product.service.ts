import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';
import {map} from 'rxjs/operators';
import { productModel } from '../Models/product';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpclient:HttpClient) { }

  GetProduct():Observable<productModel>
  {
     return this.httpclient.get<productModel>(`${environment.baseUrl}Product/getProducts`);
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
