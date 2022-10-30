import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iorder } from '../Models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpclient:HttpClient) { }

}
