import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.page.html',
  styleUrls: ['./categories-detail.page.scss'],
})
export class CategoriesDetailPage implements OnInit {


//yang ani untuk load data sama fetch data inside html atu
loadedCategories: categories;



  //supaya dapat access ke url linl (Art1, Art2, Art3 and Art4)
  constructor(private activatedRoute: ActivatedRoute,
              private categoryService:CategoryService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('categories.id')){
        //redirect
        return;
      }

      //fetch the Id (ikut url link nya, kalau ya Art1 ya ikut Art1 etc; contohnya getcategories('Art1'))
      const categoriesId = paramMap.get('categoriesId');
      this.loadedCategories = this.categoryService.getcategories(categoriesId);
    });
  }

}
