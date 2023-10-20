import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePage } from './movie.page';
import { MovieDetail } from './child.components/detail';
import { MovieEdit } from './child.components/edit';

const routes: Routes = [
  {
    path: 'edit/:id', 
   component: MovieEdit,
 },
  {
    path: 'detail/:id', 
   component: MovieDetail,
 },
 {
  path:'',
  component:MoviePage
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePageRoutingModule {}


