import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchesPageRoutingModule } from './switches-routing.module';

import { SwitchesPage } from './switches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchesPageRoutingModule
  ],
  declarations: [SwitchesPage]
})
export class SwitchesPageModule {}
