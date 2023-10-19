import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviePage } from './movie.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MoviePageRoutingModule } from './movie-routing.module';
import { List } from './child.components/list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MoviePageRoutingModule
  ],
  declarations: [MoviePage, List]
})
export class MoviePageModule {}
