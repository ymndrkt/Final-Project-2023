import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutersettingsPage } from './routersettings.page';

const routes: Routes = [
  {
    path: '',
    component: RoutersettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutersettingsPageRoutingModule {}
