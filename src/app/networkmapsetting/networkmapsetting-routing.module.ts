import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkmapsettingPage } from './networkmapsetting.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkmapsettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkmapsettingPageRoutingModule {}
