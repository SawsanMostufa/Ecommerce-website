import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../Models/iproduct';
import { IPagination } from '../../../Models/pagination';
import { productModel } from '../../../Models/productModel';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  // pageNumber = 1;
  // pageSize = 10;
  // total!: number;
  // sizes = [5, 10, 20, 30];
  // productList!:productModel;
  // productList!: IPagination;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // this.productService.getproductpagination(this.productList.).subscribe(res=>{
    //   this.productList=res
    // })
  }
  // onPageSizeChange(number: any) {
  //   this.pageSize = +number.target.value;
  // }
  // onPageChange(event:any) {
  //   this.pageNumber = event;
  // }

}
