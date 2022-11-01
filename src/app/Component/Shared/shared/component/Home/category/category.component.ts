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
 
  category:Icategory[]=[];
  categoryid :any;
  constructor(private service:CategoryService, private router:Router) { }
       
  ngOnChange(){
    // this.service.GetCategoryByID(id).subscribe(cat =>{
    //   this.categoryid=cat;
    //   console.log(this.categoryid);
    // });
  }
  ngOnInit(): void {
     this.service.GetAllCategories().subscribe(cat =>{
      this.category=cat;
      //console.log(this.category)
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
