import { Injectable } from '@angular/core';
import { categories } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//dari category.model.ts
private category: categories [] = [
 //create an object now
 new categories('art1', 'NEWGENE ART', 'Available!', 'https://healthybeauty365bn.com/wp-content/uploads/2022/01/HL000583-1-500x500.webp', 3.50),
 new categories('art2', 'INNOVITA ART', 'Available!', 'https://medtek.com.ph/wp-content/uploads/2021/04/INNOVITA-Covid-Ag-test-photo.png', 2.00),
 new categories('art3', 'PANBIO ART', 'Sold Out!', 'https://jocada.com/jocada-content/uploads/2021/06/biocan-placeholder.jpeg', 1.00)
];
  $category: any;

getAllcategories(){
  return [...this.category]; //get all categori element and copy the its array
}

getcategories(categoriesId: string){ //retrive all categories
  return {...this.category.find(categories => {
    return categories.id === categoriesId;
  })};
}

  constructor() { }
}
