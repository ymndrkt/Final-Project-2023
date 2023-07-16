import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutersPageRoutingModule } from './routers-routing.module';

import { RoutersPage } from './routers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutersPageRoutingModule
  ],
  declarations: [RoutersPage]
})
export class RoutersPageModule {}
