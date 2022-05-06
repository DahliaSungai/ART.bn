import { Component, OnInit } from '@angular/core';
import { categories } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  category: categories[];

constructor(private CategoryService: CategoryService) { }

  ngOnInit() {
    this.category = this.CategoryService.getAllcategories();
  }

  }