import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // GetAllCategories():Observable<Icategory[]>
  // {
  //   return this.httpClient.get<Icategory[]>(`${environment.baseUrl}category/getAllCategories`);
  // }
}
