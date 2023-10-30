import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePage } from './movie.page';
import { MovieDetail } from './child.components/detail';
import { MovieEdit } from './child.components/edit';
import { MovieCreate } from './child.components/create';
import { Guardian } from '../services/guardian.service';

const routes: Routes = [
  {
    path: 'create', 
   component: MovieCreate,
  
 },

  {
    path: 'edit/:id', 
   component: MovieEdit,
 },
  {
    path: 'detail/:id', 
   component: MovieDetail,
   canActivate:[Guardian] 

 },
 {
  path:'',
  component:MoviePage
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[Guardian]
})
export class MoviePageRoutingModule {}


