import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersettingsPage } from './serversettings.page';

const routes: Routes = [
  {
    path: '',
    component: ServersettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServersettingsPageRoutingModule {}
