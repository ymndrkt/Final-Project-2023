import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkmapPageRoutingModule } from './networkmap-routing.module';

import { NetworkmapPage } from './networkmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkmapPageRoutingModule
  ],
  declarations: [NetworkmapPage]
})
export class NetworkmapPageModule {}
