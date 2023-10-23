import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviePage } from './movie.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MoviePageRoutingModule } from './movie-routing.module';
import { List } from './child.components/list.component';
import { MovieDetail } from './child.components/detail';
import { MovieEdit } from './child.components/edit';
import { MovieDelete } from './child.components/delete';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MoviePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MoviePage, List, MovieDetail, MovieEdit, MovieDelete]
})
export class MoviePageModule {}
