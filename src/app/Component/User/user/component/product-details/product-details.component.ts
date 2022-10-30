import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Iproduct } from 'src/app/Component/Shared/shared/Models/iproduct';
import { productModel } from 'src/app/Component/Shared/shared/Models/productModel';
import { ProductService } from 'src/app/Component/Shared/shared/Services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!:any;
 
  id:any;
  image = environment.imagesUrl + "Images/Products/";
  quantity = 1;
  // SizeId!:number;
  Sizevalue:any;
  // price:any;
  // discount!:number;
  // defaultprice:number=0;
  constructor(private router:Router, private productService:ProductService , 
     private activateRoute: ActivatedRoute) { }
    //  private router:Router,,private _location: Location
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({next:(pramas:ParamMap)=>{this.id=pramas.get("id");},
    error:(err)=>{throw new Error(err)}})
    this.productService.GetProductID(this.id).subscribe(res=>
      {
        this.product=  res
        console.log('this.product')
        console.log(this.product)
    })
  }
   
  // onChange(value:any) {
  //   this.productService.GetProductID(this.id).subscribe(res=>
  //     {
  //       this.product=  res
  //       this.Sizevalue=res.productSizes.filter(item => item.value == value);
  //     console.log( this.Sizevalue)
  //   })
    
    // this.price= this.Sizevalue[0].price;
    // this.discount= this.Sizevalue[0].discount;
  
    // this.defaultprice=1;
   
 }

  
}
