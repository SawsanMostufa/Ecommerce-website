import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Icategory } from '../../../Models/icategory';
import { CategoryService } from '../../../Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  images:any; 
  responsiveOptions:any;
  category:Icategory[]=[];
  categoryid :any;
  constructor(private service:CategoryService, private router:Router) { 
  //   this.responsiveOptions = [{
  //     breakpoint: '1024px',
  //     numVisible: 1,
  //     numScroll: 3
  // }];
  }
       
  ngOnChange(){
    // this.service.GetCategoryByID(id).subscribe(cat =>{
    //   this.categoryid=cat;
    //   console.log(this.categoryid);
    // });
  }
  ngOnInit(): void {
  //   this.images = [
  //     {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
  //     {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
  //     {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
  //     {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
  //     {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
  //     {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
  // ];

     this.service.GetAllCategories().subscribe(cat =>{
      this.category=cat;
     
  });
}
  
 getCategoryByID(id:number)
 {
  this.service.GetCategoryByID(id).subscribe(cat =>{
    this.categoryid=cat;
    //console.log(this.categoryid);
 });
    
}


}
