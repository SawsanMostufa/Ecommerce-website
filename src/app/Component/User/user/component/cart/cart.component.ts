import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges,OnChanges } from '@angular/core';
import { Basket } from 'src/app/Component/Shared/shared/Models/basket';
import { Iproduct } from 'src/app/Component/Shared/shared/Models/iproduct';
import { BasketService } from 'src/app/Component/Shared/shared/Services/basket.service';
import { ProductService } from 'src/app/Component/Shared/shared/Services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  imageUrl = environment.imagesUrl + "Images/Products/";
  recevedTotalPrice:number = 0; 
  product!: Iproduct;
  ProductID:any
  cartproducts: Basket[] = [];
  @Output() onTotalPriceChange:EventEmitter<number>
  constructor( private basketService:BasketService , private productService:ProductService)
   { 
       this.onTotalPriceChange = new EventEmitter<number>();
   }

 ngOnChanges(changes: SimpleChanges): void {}
 ngOnInit(): void {
      this. getCartProduct() 
  }
 getCartProduct()
 {
    if('cart' in localStorage)
    {
        this.cartproducts= JSON.parse(localStorage.getItem('cart')!) 
        this.basketTotalPrice();
    }
 }
 
 basketTotalPrice(){
    this.recevedTotalPrice=0;
    for(var item in this.cartproducts)
    {
        this.recevedTotalPrice+= this.cartproducts[item].price * this.cartproducts[item].quantity
        this.onTotalPriceChange.emit(this.recevedTotalPrice);
    }
  }
  removeBasketItem(index: number){
        debugger
        this.cartproducts.splice(index , 1);
        this.basketTotalPrice();
        localStorage.setItem('cart',JSON.stringify(this.cartproducts))
      
  }

  clearCart()
  {
        this.cartproducts=[];
        localStorage.setItem('cart',JSON.stringify(this.cartproducts))
        this.basketTotalPrice();
  }


  decrementQuantity(index:number) {
      if (this.cartproducts[index].quantity > 1)
       {
        this.cartproducts[index].quantity--;
        localStorage.setItem('cart',JSON.stringify(this.cartproducts))
        this.basketTotalPrice();
       }

  }

  incrementQuantity(index:number) {
    debugger
    this.checkProductQtyAva(index )
  }
  // getPrdByID( id:number)
  // {
  //   this.productService.GetProductID(id).subscribe(response =>{
  //     this.ProductID = response.data;
  //     // console.log("productcategory");
  //     console.log(this.ProductID);
  // });

  // }

  checkProductQtyAva(index:number) {
      // debugger

    this.productService.GetProductID(this.cartproducts[index].productId).subscribe(res =>{
      console.log(res);
      this.ProductID = res
    console.log(this.ProductID)
    this.ProductID.quantity=this.cartproducts[index].quantity;
      this.basketService.checkProductQtyAva( this.ProductID ,this.cartproducts[index].quantity+1)
      .subscribe((response: any) => {

     
        if (response.message == "Quantity not available in stock" && response.status == false) {
            alert("Quantity not available in stock");
        }
        if (response.message == "Quantity request greater than in stock" && response.status == false) {
              alert("Quantity request greater than in stock");
       }
        if (response.message == "Quantity available" && response.status == true) { 
              this.cartproducts[index].quantity++;
              localStorage.setItem('cart',JSON.stringify(this.cartproducts))
              this.basketTotalPrice();
        }

      });
    
    });

  
  }
  
}
