import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrityPage } from './celebrity.page';

const routes: Routes = [
  {
    path: '',
    component: CelebrityPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebrityPageRoutingModule {}
