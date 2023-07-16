import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompsettingsPage } from './compsettings.page';

const routes: Routes = [
  {
    path: '',
    component: CompsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompsettingsPageRoutingModule {}
