import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPage } from './profile.detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}
