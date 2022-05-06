import { Injectable } from '@angular/core';
import { categories } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//dari category.model.ts
private category: categories [] = [
  {
  id: 'ART1',
  imageUrl: 'https://healthybeauty365bn.com/wp-content/uploads/2022/01/HL000583-1-500x500.webp',
  title: 'NEWGENE Bioengineering COVID-19 Antigen Detection Kit',
},

{
  id: 'ART2',
  imageUrl: 'https://medtek.com.ph/wp-content/uploads/2021/04/INNOVITA-Covid-Ag-test-photo.png',
  title: 'INNOVITA One Step Rapid Test (2019- nCoV) Ag Test',
},

{
  id: 'ART3',
  imageUrl: 'https://jocada.com/jocada-content/uploads/2021/06/biocan-placeholder.jpeg',
  title: 'Biocan Tellmefast Covid-19 Antigen Test',
},

{
  id: 'ART4',
  imageUrl: 'https://www.globalpointofcare.abbott/content/dam/poc/products-solutions/products/panbio/consumer/Panbio-COVID-Ag-PP-imgA-Consumer-470-1.jpg',
  title: 'Panbio COVID-19 RAPID Test Device',
}
];

getAllcategories(){
  return [...this.category]; //get all categori element and copy the its array
}

getcategories(categoriesId: string){ //retrive all recipe
  return {...this.category.find(recipe => {
    return recipe.id === categoriesId;
  })};
}
  


  constructor() { }
}
