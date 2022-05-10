import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtbnPage } from './artbn.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ArtbnPage,
    children: [
      {
        path: 'category', 
        loadChildren: () => import ('../category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: 'cart', 
        loadChildren: () => import ('../cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'profile', 
        loadChildren: () => import ('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/artbn/tabs/category',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/artbn/tabs/category',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtbnPageRoutingModule {}
