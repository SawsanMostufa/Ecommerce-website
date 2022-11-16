import { Component, OnInit,OnChanges } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { BasketService } from '../../Services/basket.service';
import { Subject } from 'rxjs';
import { CategoryService } from '../../Services/category.service';
import { ProductService } from '../../Services/product.service';
import { AccountService } from '../../Services/account.service';
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit, OnChanges {
   countCart:any;   
   cartItem:number=0;
   productList:Iproduct[]=[]
   isUserLogged:boolean=false;

  constructor(private basketService:BasketService, private productservice:ProductService,private accountservice:AccountService) { 
    this.basketService.cartSubject.subscribe((data)=>{
      this.cartItem=data;
      console.log(data);
   })
  }
  ngOnChanges(): void {
  
  }

  ngOnInit(): void {
    this.accountservice.getloggedStatus().subscribe(status =>{
      this.isUserLogged=status;
    })
    this.cartItem= this.basketService.cartItemNumber() ;
  }
  search:string="";
  Search()
  {
    this.productservice.GetProduct().subscribe({next:data=>
      {
        this.productList=data.data
        .filter(a=>a.name.includes(this.search))},
      error:(err)=>{throw new Error(err)}});
  }
}
