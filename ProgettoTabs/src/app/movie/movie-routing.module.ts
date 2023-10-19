import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePage } from './movie.page';
import { MovieDetail } from './child.components/detail';

const routes: Routes = [

  {
    path: 'detail/:id', 
   component: MovieDetail,
 },
 {
  path:'',
  component:MoviePage
 }
  //{
  ////  path: 'parent',
  ///  component: MoviePage,
  //  children:[{
   //   path: './list/:id',
    //  component: List
    //}]
 // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePageRoutingModule {}


