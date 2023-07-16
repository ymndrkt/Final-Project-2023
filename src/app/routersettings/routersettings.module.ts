import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutersettingsPageRoutingModule } from './routersettings-routing.module';

import { RoutersettingsPage } from './routersettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutersettingsPageRoutingModule
  ],
  declarations: [RoutersettingsPage]
})
export class RoutersettingsPageModule {}
