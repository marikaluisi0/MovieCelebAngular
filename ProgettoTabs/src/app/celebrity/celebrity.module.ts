import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CelebrityPage } from './celebrity.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import {  CelebrityPageRoutingModule } from './celebrity-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CelebrityPageRoutingModule
  ],
  declarations: [CelebrityPage]
})
export class CelebrityPageModule {}
