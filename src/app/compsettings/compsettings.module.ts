import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompsettingsPageRoutingModule } from './compsettings-routing.module';

import { CompsettingsPage } from './compsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompsettingsPageRoutingModule
  ],
  declarations: [CompsettingsPage]
})
export class CompsettingsPageModule {}
