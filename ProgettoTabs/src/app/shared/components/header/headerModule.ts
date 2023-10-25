import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { MoviePageRoutingModule } from 'src/app/movie/movie-routing.module';
import { HeaderComponent } from './header';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MoviePageRoutingModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
