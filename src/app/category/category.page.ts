import { Component, OnInit } from '@angular/core';
import { categories } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  category: categories[]; //must be empty sebab ya fetch dari service

constructor(private CategoryService: CategoryService) { }


//assigning the data 
  ngOnInit() {
    this.category = this.CategoryService.getAllcategories();
  }

  }