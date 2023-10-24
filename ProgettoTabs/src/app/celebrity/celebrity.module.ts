import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebrityPage } from './celebrity.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import {  CelebrityPageRoutingModule } from './celebrity-routing.module';
import { List } from './child.components/list.component';
import { CelebrityDetail } from './child.components/detail';
import { HeaderComponent } from '../shared/components/header/header';
//import { CelebrityEdit } from './child.components/edit';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CelebrityPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CelebrityPage, List, CelebrityDetail]
})
export class CelebrityPageModule {}
