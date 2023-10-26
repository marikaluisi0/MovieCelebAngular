import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviePage } from './movie.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MoviePageRoutingModule } from './movie-routing.module';
import { MovieDetail } from './child.components/detail';
import { MovieEdit } from './child.components/edit';
import { MovieDelete } from './child.components/delete';
import { MovieCreate } from './child.components/create';
import { HeaderModule } from '../shared/components/header/headerModule';
import { ListModule } from '../shared/components/list/list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MoviePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    ListModule
  ],
  declarations: [MoviePage, MovieDetail, MovieEdit, MovieDelete, MovieCreate]
})
export class MoviePageModule {}
