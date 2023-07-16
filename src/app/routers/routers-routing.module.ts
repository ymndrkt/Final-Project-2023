import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutersPage } from './routers.page';

const routes: Routes = [
  {
    path: '',
    component: RoutersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutersPageRoutingModule {}
