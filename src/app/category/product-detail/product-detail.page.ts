import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {


  //untuk loaded ke url each categories and supaya ya dpt display arah html page.
  loadedCategories: categories;



  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('categoriesId')){
        //redirect
        return;
      }

      //yang ani untuk return to categories Id
      const categoriesId = paramMap.get('categoriesId');
      this.loadedCategories = this.categoryService.getcategories(categoriesId);
    })
  }
}
