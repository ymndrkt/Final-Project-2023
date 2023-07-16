import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchesPage } from './switches.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchesPageRoutingModule {}
