import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges,OnChanges } from '@angular/core';
import { Basket } from 'src/app/Component/Shared/shared/Models/basket';
import { Iproduct } from 'src/app/Component/Shared/shared/Models/iproduct';
import { BasketService } from 'src/app/Component/Shared/shared/Services/basket.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 cartproduct:any[]=[];
  imageUrl = environment.imagesUrl + "Images/Products/";
  recevedTotalPrice:number=0;
  product!: Iproduct;
  // quantity = 1;
  @Output() onTotalPriceChange:EventEmitter<number>
  constructor( private basketService:BasketService)
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
        this.cartproduct= JSON.parse(localStorage.getItem('cart')!) 
        this.basketTotalPrice();
    }
 }
 
 basketTotalPrice(){
    this.recevedTotalPrice=0;
    for(var item in this.cartproduct)
    {
        this.recevedTotalPrice+= this.cartproduct[item].price * this.cartproduct[item].quantity
        this.onTotalPriceChange.emit(this.recevedTotalPrice);
    }
  }
  removeBasketItem(index: number){
        debugger
        this.cartproduct.splice(index , 1);
        this.basketTotalPrice();
        localStorage.setItem('cart',JSON.stringify(this.cartproduct))
      
  }

  clearCart()
  {
        this.cartproduct=[];
        localStorage.setItem('cart',JSON.stringify(this.cartproduct))
        this.basketTotalPrice();
  }


  decrementQuantity(index:number) {
      if (this.cartproduct[index].quantity > 1)
       {
        this.cartproduct[index].quantity--;
        localStorage.setItem('cart',JSON.stringify(this.cartproduct))
        this.basketTotalPrice();
       }

  }

  incrementQuantity(index:number) {
    debugger
    this.checkProductQtyAva(index )

  }

  checkProductQtyAva(index:number) {
    this.basketService.checkProductQtyAva(this.cartproduct[index],this.cartproduct[index].quantity+1)
      .subscribe((response: any) => {

       // debugger
        if (response.message == "Quantity not available in stock" && response.status == false) {
            alert("Quantity not available in stock");
        }
        if (response.message == "Quantity request greater than in stock" && response.status == false) {
              alert("Quantity request greater than in stock");
        }
        if (response.message == "Quantity available" && response.status == true) { 
              this.cartproduct[index].quantity++;
              localStorage.setItem('cart',JSON.stringify(this.cartproduct))
              this.basketTotalPrice();
        }

      });
  }
  
}
