import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrityPage } from './celebrity.page';
import { CelebrityDetail } from './child.components/detail';
//import { CelebrityEdit} from './child.components/edit';

const routes: Routes = [

  {
    path: 'detail/:id', 
   component: CelebrityDetail,
 },
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
