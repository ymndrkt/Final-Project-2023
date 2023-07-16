import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompPageRoutingModule } from './comp-routing.module';

import { CompPage } from './comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompPageRoutingModule
  ],
  declarations: [CompPage]
})
export class CompPageModule {}
