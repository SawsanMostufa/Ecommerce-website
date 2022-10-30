import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icategory } from '../../../Models/icategory';
import { Iproduct } from '../../../Models/iproduct';
import { productModel } from '../../../Models/productModel';
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
  
  constructor( private categoryservice:CategoryService, private shopService:ShopService , private productservice:ProductService ) { }

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
   this.ProductList.forEach(element => {
          element.productSizes.sort((a,b) => a.price - b.price) 
       });
                                      
   if(option.value =='priceAsc'){
    this.ProductList.sort((a, b) => Number(a.productSizes[0].price) - Number(b.productSizes[0].price))
   }
   else if(option.value =='priceDesc'){
     this.ProductList.sort((a, b) => Number(b.productSizes[0].price) - Number(a.productSizes[0].price))
   }
  
  
  });

}
}

  
