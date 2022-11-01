import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Basket } from '../../../Models/basket';
import { Icategory } from '../../../Models/icategory';
import { Iproduct } from '../../../Models/iproduct';
import { productModel } from '../../../Models/productModel';
import { BasketService } from '../../../Services/basket.service';
import { CategoryService } from '../../../Services/category.service';
import { ProductService } from '../../../Services/product.service';
import { ShopService } from '../../../Services/shop.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit , OnChanges {
  categoryList:Icategory[]=[];
  categoryName!:string;
  // ProductList:any;
  ProductList!:Iproduct[];
  sortProductPrice:any;
  cartproducts:any[]=[];
  // cartproducts:Basket[]=[];

  // public cartItemList = new BehaviorSubject<any>([]);
  // baseUrl = 'http://localhost:40029/api/';
  
  constructor( private categoryservice:CategoryService, 
    private shopService:ShopService ,
     private productservice:ProductService,
     private basketService:BasketService
     
     ) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.categoryservice.GetAllCategories().subscribe(cat =>{
      this.categoryList=cat;
      // console.log(this.categoryList);
          });
      // this.getProducts()
    //  this.sortProductByPrice();
                                                   
}


 onCategorySelected(name:string){
   this.categoryName=name;

}
sortProductByPrice(option:any)
{
  this.productservice.GetProduct().subscribe(response =>{
    this.ProductList = response.data
  //  this.ProductList.forEach(element => {
  //         element.productSizes.sort((a,b) => a.price - b.price) 
  //      });
                                      
   if(option.value =='priceAsc'){
    this.ProductList.sort((a, b) => Number(a.price) - Number(b.price))
   }
   else if(option.value =='priceDesc'){
     this.ProductList.sort((a, b) => Number(b.price) - Number(a.price))
   }
  
  
  });

}

addtocart(event:any){
 if('cart' in localStorage)
 {
  debugger
   this.cartproducts= JSON.parse(localStorage.getItem('cart')!) 
   let exist=this.cartproducts.find(item=>item.id == event.id)
   if(exist){
    alert('this is already in your cart')
   }
   else{
    this.cartproducts.push(event)
    localStorage.setItem('cart',JSON.stringify(this.cartproducts))
   }
   
   }
    else{
      this.cartproducts.push(event)
      localStorage.setItem('cart',JSON.stringify(this.cartproducts))

}
} 
}


  
