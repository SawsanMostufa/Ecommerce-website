import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Iproduct } from 'src/app/Component/Shared/shared/Models/iproduct';
import { productModel } from 'src/app/Component/Shared/shared/Models/productModel';
import { BasketService } from 'src/app/Component/Shared/shared/Services/basket.service';
import { ProductService } from 'src/app/Component/Shared/shared/Services/product.service';
import { environment } from 'src/environments/environment';
import { Basket } from 'src/app/Component/Shared/shared/Models/basket';
import { Size } from 'src/app/Component/Shared/shared/Models/size';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Iproduct;
  productdetails: any;
  id: any;
  countCart: any[] = [];
  cartItem: number = 0;
  image = environment.imagesUrl + "Images/Products/"; 
  cartproducts: any[] = [];
  quantity = 1;
  index: any;
ProductObj:any;
  cartItems: number = 0;
  constructor(private router: Router, private productService: ProductService,
    private basketService: BasketService,
    private activateRoute: ActivatedRoute) { }
  //  private router:Router,,private _location: Location

  ngOnChanges(): void {

  }
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
      next: (pramas: ParamMap) => { this.id = pramas.get("id"); },
      error: (err) => { throw new Error(err) }
    })
    this.productService.GetProductID(this.id).subscribe(res => {
      // debugger
      this.productdetails = res
      this.product = this.productdetails
      this.ProductObj=this.productdetails;
    });
   
    
  }
  cartItemNumber() {

    if ('cart' in localStorage) {

      this.countCart = JSON.parse(localStorage.getItem('cart')!)
      this.cartItem = this.countCart.length;
      this.basketService.cartSubject.next(this.cartItem);
    }
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }

  }

  incrementQuantity() {
    // this.checkProductQtyAva()
    this.quantity++;

  }


  addItemToCart () {
    debugger
     
        
       // console.log( this.product.quantity)
    this.basketService.checkProductQtyAva(this.product, this.quantity)
      .subscribe((response: any) => {
        debugger
         

        if (response.message == "Quantity not available in stock" && response.status == false) {
          alert("Quantity not available in stock");
        }
        if (response.message == "Quantity request greater than in stock" && response.status == false) {
          alert("Quantity request greater than in stock");
        }
        if (response.message == "Quantity available" && response.status == true) 
        {
           
            // this.product.quantity = this.quantity;
            
            this.checkProductQtyAva()
              // this.cartItem= this.basketService.cartItemNumber() ;
            debugger
            this.basketService.cartSubject.next(this.cartItem);
             //this.cartItems = this.basketService.cartItemNumber() ;
        }
           
      });


  }
     checkProductQtyAva() {
 
       console.log(this.ProductObj)
    if ('cart' in localStorage) {

      this.cartproducts = JSON.parse(localStorage.getItem('cart')!)

      let exist = this.cartproducts.find(item => item.id == this.product.id)
     
      if (exist) {
               
         this.index = this.cartproducts.findIndex(x => x.id === this.product.id);
        if(this.cartproducts[this.index].quantity + this.quantity <= this.ProductObj.quantity)
        {
          this.cartproducts[this.index].quantity += this.quantity;
          localStorage.setItem('cart', JSON.stringify(this.cartproducts))
           alert("Product added in your basket");

        }
        else{
          alert("Quantity request greater than in stock");

        }

      }
      else {
        this.product.quantity = this.quantity;
        this.cartproducts.push(this.product)
        localStorage.setItem('cart', JSON.stringify(this.cartproducts))
        alert("Product added in your basket");

      }

    }
    else {
      this.product.quantity = this.quantity;
      this.cartproducts.push(this.product)
      localStorage.setItem('cart', JSON.stringify(this.cartproducts))
      alert("Product added in your basket");

    }

  }

}

