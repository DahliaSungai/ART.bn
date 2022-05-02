import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
