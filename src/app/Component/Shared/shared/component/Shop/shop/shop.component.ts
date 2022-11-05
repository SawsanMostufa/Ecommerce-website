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
  exist:any;
  ProductList!:Iproduct[];
  sortProductPrice:any;
  cartproducts:any[]=[];
  quantity = 1;
  index:any;
  // cartproducts:Basket[]=[];
  ProductObj:any
  // public cartItemList = new BehaviorSubject<any>([]);
 
  
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
    // this.ProductObj=this.productdetails;                                          
}


 onCategorySelected(name:string){
   this.categoryName=name;

}
sortProductByPrice(option:any)
{
  this.productservice.GetProduct().subscribe(response =>{
    this.ProductList = response.data
    this.ProductObj=this.ProductList;
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

// addItemToCartCheckQuantity()
// {
//  debugger
//  this.product.quantity=this.quantity;

//  this.basketService.checkProductQtyAva(this.product,this.quantity)
//  .subscribe((response: any) => {
//           debugger
//        if(response.message == "Quantity not available in stock" && response.status == false){
//            alert("Quantity not available in stock");
//        }
//        if(response.message == "Quantity request greater than in stock" && response.status == false){
//           alert("Quantity request greater than in stock");
//        }
//        if(response.message == "Quantity available" && response.status == true){

//                  // this.basketService.getAndSetItemFromBasket();
//                      this. addtocart()
//                      // this.cartItem= this.basketService.cartItemNumber() ;
//                          debugger
//           this.basketService.cartSubject.next(this.cartItem);
//           //this.cartItems = this.basketService.cartItemNumber() ;
//        }
    
//    });
   
 
 

//  }



addtocart(event:any){
  debugger
 if('cart' in localStorage)
 {
  debugger
   this.cartproducts= JSON.parse(localStorage.getItem('cart')!) 
    this.exist=this.cartproducts.find(item=>item.id == event.id)
   if (this.exist) {
               
    this.index = this.cartproducts.findIndex(x => x.id === this.exist.id);
   if((this.cartproducts[this.index].quantity + 1) <= event.quantity)
   {
     this.cartproducts[this.index].quantity += 1;
     localStorage.setItem('cart', JSON.stringify(this.cartproducts))
      alert("Product added in your basket");

   }
   else{
     alert("Quantity request greater than in stock");
     }
    }
   else{
    event.quantity=1;
    this.cartproducts.push(event)
    localStorage.setItem('cart',JSON.stringify(this.cartproducts))
    alert("Product added in your basket");
        }
   
   }
    else{
      event.quantity=1;
      this.cartproducts.push(event)
      localStorage.setItem('cart',JSON.stringify(this.cartproducts))
      alert("Product added in your basket");

       }
       
  
} 
}


  
