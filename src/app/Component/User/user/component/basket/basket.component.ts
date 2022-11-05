import { Component, Input, OnInit, SimpleChanges,OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  image = environment.imagesUrl + "Images/Products/";
  recevedTotalPrice:any;
  
  constructor() { }
  
   ngOnChanges(changes: SimpleChanges): void {
    
    }
  ngOnInit(): void {
    
  }
  updateTotalPrice(totalPrice:number )
  {
    this.recevedTotalPrice=totalPrice;
  }
}
