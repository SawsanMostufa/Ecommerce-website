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
  constructor(private service:CategoryService, private router:Router) { }
       
  ngOnInit(): void {
     this.service.GetAllCategories().subscribe(cat =>{
      this.category=cat;
      
  });
}
  
  // getAllCourses(){
  //      return this.service.GetAllCategories().subscribe(cat =>{
  //       this.category=cat;
  //       console.log(this.category);
  //     })
      // err => {
      //   console.log(err.message);
      //  })
    
    


}
