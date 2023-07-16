import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchsettingsPageRoutingModule } from './switchsettings-routing.module';

import { SwitchsettingsPage } from './switchsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchsettingsPageRoutingModule
  ],
  declarations: [SwitchsettingsPage]
})
export class SwitchsettingsPageModule {}
