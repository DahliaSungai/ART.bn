import { Injectable } from '@angular/core';
import { categories } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//dari category.model.ts
        // places:   Place[]
private category: categories [] = [
 //create an object now
 new categories('art1', 'NEWGENE ART', 'This test is used to detect antigens of the SARS CoV 2 virus in individuals suspected of having COVID19 and is designed as a selftest for the general public', 'Test sensitivity and specificity', 'Available!', 'https://healthybeauty365bn.com/wp-content/uploads/2022/01/HL000583-1-500x500.webp', 3.50),
 new categories('art2', 'INNOVITA ART', 'The test provides a quick diagnostic reference for COVID-19.', 'Duration: A qualitative result can be read after 15 minutes', 'Available!', 'https://medtek.com.ph/wp-content/uploads/2021/04/INNOVITA-Covid-Ag-test-photo.png', 2.00),
 new categories('art3', 'PANBIO ART', 'Accessible, easy-to-deploy, large-scale testing helps contain the virus spread. Approved by MOH','result can be read after 15 minutes', 'Available!', 'https://jocada.com/jocada-content/uploads/2021/06/biocan-placeholder.jpeg', 1.00),
 new categories('art4', 'QuickVue At-Home OTC COVID-19 Test', 'The test is intended to be used twice over two to three days, with at least 24 hours and no more than 36 hours between tests.','result can be read after 15 minutes', 'Available!', 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/at-home-covid-test-1638280014.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*', 1.00)
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
