import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchsettingsPage } from './switchsettings.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchsettingsPageRoutingModule {}
