import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Iproduct } from 'src/app/Component/Shared/shared/Models/iproduct';
import { productModel } from 'src/app/Component/Shared/shared/Models/productModel';
import { BasketService } from 'src/app/Component/Shared/shared/Services/basket.service';
import { ProductService } from 'src/app/Component/Shared/shared/Services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!:Iproduct;
 productdetails:any;
  id:any;
  image = environment.imagesUrl + "Images/Products/";
  quantity = 1;
  SizeId!:number;
  Sizevalue:any;
  price:any;
  discount!:number;
  defaultprice:number=0;
  sizeobj:any={};
 mapped:any=[];
  constructor(private router:Router, private productService:ProductService , 
    private basketService:BasketService,
     private activateRoute: ActivatedRoute) { }
    //  private router:Router,,private _location: Location
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({next:(pramas:ParamMap)=>{this.id=pramas.get("id");},
    error:(err)=>{throw new Error(err)}})
    this.productService.GetProductID(this.id).subscribe(res=>
      {
        // debugger
        this.productdetails=  res
        this.product=this.productdetails
        console.log('this.product')
        console.log(this.productdetails)
    })

    
  }

   
   onChange(event:any) {
  
    // debugger
     this.Sizevalue=this.product.productSizes.filter(siz => siz.value === event.target.value);
    
     this.price= this.Sizevalue[0].price;
     this.discount= this.Sizevalue[0].discount;
   
     this.defaultprice=1;
   
}

// addItemToBasket(){
//   debugger
//   this.basketService.checkProductQtyAva(this.product, this.quantity,this.Sizevalue )
//   .subscribe((response: any) => {
//     debugger

//     if(this.defaultprice==0){
//       this.sizeobj=this.product.productSizes[0]; 
//       this.mapped[0] =this.sizeobj;
//       this.Sizevalue=this.mapped;

//     }
//      this.product.productSizes=this.Sizevalue;
    
//     setTimeout(() => {
//       if(response.message == "Quantity not available in stock" && response.status == false){
//         this.toaster.error("Quantity not available in stock");
//       }
//       if(response.message == "Quantity request greater than in stock" && response.status == false){
//         this.toaster.error("Quantity request greater than in stock");
//       }
//       if(response.message == "Quantity available" && response.status == true){
//         this.basketService.addItemToBasket(this.product, this.quantity,this.Sizevalue);
//      this.basketService.addItemToBasket(this.product, this.quantity,this.Sizevalue);

//         this.toaster.success("Product added in your basket");
//         //this.cardService.addToCart(this.product);
//       }
//     }, 50);
//   }, (err: any) => {
//     setTimeout(() => {
//       this.toaster.error("Server response error");
//     }, 50);
//   }, () => {
//     //final
//   });
  
// }

// onChange(Value) {
//   this.Sizevalue=this.product.productSizes.filter(siz => siz.value === Value);
 
 
 
// }
}
