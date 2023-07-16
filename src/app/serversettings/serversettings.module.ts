import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServersettingsPageRoutingModule } from './serversettings-routing.module';

import { ServersettingsPage } from './serversettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServersettingsPageRoutingModule
  ],
  declarations: [ServersettingsPage]
})
export class ServersettingsPageModule {}
