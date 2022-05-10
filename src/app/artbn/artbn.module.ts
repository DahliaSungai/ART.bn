import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtbnPageRoutingModule } from './artbn-routing.module';

import { ArtbnPage } from './artbn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtbnPageRoutingModule
  ],
  declarations: [ArtbnPage]
})
export class ArtbnPageModule {}
