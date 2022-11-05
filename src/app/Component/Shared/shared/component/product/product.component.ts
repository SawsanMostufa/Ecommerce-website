import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

import { Iproduct } from '../../Models/iproduct';
import { productModel } from '../../Models/productModel';
import { Size } from '../../Models/size';
import { ProductService } from '../../Services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnChanges {

ProductList!:Iproduct[];
 productListOfCat:Iproduct[]=[];
ProductID:any;
@Input()resevedcategory!:string;
@Input() resevedSortProductByPrice:any;
@Output() sendproduct:EventEmitter<any>=new EventEmitter();
defaultSize:Size[]=[];
image = environment.imagesUrl + "Images/Products/";
  constructor(private service:ProductService )
   {}

  ngOnChanges(changes: SimpleChanges): void {
      
    if( this.resevedcategory==='')
    {
      this.productListOfCat=this.ProductList;
    }
    else{
          this.productListOfCat=this.ProductList.filter(res=> res.category=== this.resevedcategory);
        }
    
    this.productListOfCat=this.resevedSortProductByPrice;

  }
   
   
  ngOnInit(): void {
  
        this.getProducts();
       
  }
  sortPrice(){
    this.productListOfCat=this.resevedSortProductByPrice;
  }
  // changecat(){
  //   if( this.resevedcategory==='')
  //   {
  //     this.productListOfCat=this.ProductList;
  //   }
  //   else
  //   this.productListOfCat=this.ProductList.filter(res=> res.category=== this.resevedcategory);
  // }
 
  getProducts()
  {
    this.service.GetProduct().subscribe(response =>{
      this.ProductList = response.data;
      this.productListOfCat=response.data;
  });
  }
 
  getPrdByID( id:number)
  {
    this.service.GetProductID(id).subscribe(response =>{
      this.ProductID = response.data;
      // console.log("productcategory");
      console.log(this.ProductID);
  });

  }
  addItemToBasket(obj:any){
    debugger
    // obj.quantity=1;

    this.defaultSize[0]=obj.productSizes[0];
     obj.productSizes=this.defaultSize;
    //  console.log(obj)
   this.sendproduct.emit(obj);
//  console.log(obj)
  }
  
}
