import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkmapsettingPageRoutingModule } from './networkmapsetting-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NetworkmapsettingPage } from './networkmapsetting.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkmapsettingPageRoutingModule,
    DragDropModule
  ],
  declarations: [NetworkmapsettingPage]
})
export class NetworkmapsettingPageModule {}
