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
import { MovieCreate } from './child.components/create';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../shared/components/header/headerModule';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MoviePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  declarations: [MoviePage, List, MovieDetail, MovieEdit, MovieDelete, MovieCreate]
})
export class MoviePageModule {}
