import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaduserPage } from './caduser.page';

const routes: Routes = [
  {
    path: '',
    component: CaduserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaduserPageRoutingModule {}
