import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/Component/Admin/Services/modal.service';
import { CategoryService } from 'src/app/Component/Shared/shared/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
categoryList:any
modalTitle!: string;
buttonTitle!: string;
categoryForm!: FormGroup;
  constructor(private categoryService:CategoryService,
              private fb: FormBuilder,
              private modalService:ModalService   ) { }

  ngOnInit(): void {
    this.categoryService.GetAllCategories().subscribe(res=>{
   this.categoryList=res
    })
    this.createCategoryForm();
  }
  createCategoryForm() {
    this.categoryForm = this.fb.group({
      id: [0],
      name: [, [Validators.required]]
    });
  }
  // showModal(template: TemplateRef<any>) {
  //   this.buttonTitle = "Save" ;
  //   this.modalTitle = "Add category"
  //   this.modalService.showModalMD(template);
  // }
}
