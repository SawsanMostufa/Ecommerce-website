import { Component, OnInit,OnChanges } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { BasketService } from '../../Services/basket.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit, OnChanges {
   countCart:any;   
   cartItem:number=0;

  constructor(private basketService:BasketService) { 
    this.basketService.cartSubject.subscribe((data)=>{
      this.cartItem=data;
      console.log(data);
   })
  }
  ngOnChanges(): void {
  
  }

  ngOnInit(): void {
    this.cartItem= this.basketService.cartItemNumber() ;
  }

}
