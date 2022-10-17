import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { ProductService } from '../../Services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
// ProductList:any;
ProductList:any;
productListOfCat:any;
ProductID:any;
@Input() sentCatID:number=0;

  constructor(private service:ProductService)
   {}
  ngOnChange(){
    // this.service.GetProductByCatID(this.sentCatID).subscribe(response =>{
    //   this.productListOfCat=response.data;
    //   console.log(this.productListOfCat);
    // })
  }
  ngOnInit(): void {

    this.service.GetProduct().subscribe(response =>{
      debugger
      this.ProductList = response.data;
      console.log(this.ProductList);
  });
 
  }
  // getPrdByID( id:any)
  // {
  //   this.service.GetProductID(this.id).subscribe(response =>{
  //     this.ProductID = response.data;
  //     console.log(this.ProductList);
  // });

  }

