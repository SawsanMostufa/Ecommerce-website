import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';
import {map} from 'rxjs/operators';
import { productModel } from '../Models/productModel';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpclient:HttpClient) { }

  GetProduct():Observable<productModel>
  {
   return this.httpclient.get<productModel>(`${environment.baseUrl}Product/getProducts`);
  
  }

  GetProductByCatID(catID:number):Observable<productModel>
  {
    return this.httpclient.get<productModel>(`${environment.baseUrl}Product?getCategor=${catID}`);
  }

  GetProductID(id:number):Observable<productModel>
  {
      
    return this.httpclient.get<productModel>(`${environment.baseUrl}Product/getProduct/${id}`);
    
  }

 
  GetLatestProducts():Observable<Iproduct[]>
  {
   return this.httpclient.get<Iproduct[]>(`${environment.baseUrl}Product/getLatestProducts`);
  
  }

  // addProduct(newprd:Iproduct):Observable<Iproduct>
  // {
  //    this.httpclient.post<Iproduct>(`${environment.baseUrl}Product',);
    
  // }
}
