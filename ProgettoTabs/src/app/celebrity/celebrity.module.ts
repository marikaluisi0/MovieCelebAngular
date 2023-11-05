import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebrityPage } from './celebrity.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import {  CelebrityPageRoutingModule } from './celebrity-routing.module';
import { CelebrityDetail } from './child.components/detail';
import { CelebrityEdit } from './child.components/edit';
import { CelebrityDelete } from './child.components/delete';
import { CelebrityCreate } from './child.components/create';
import { HeaderModule } from '../shared/components/header/headerModule';
import { ListModule } from '../shared/components/list/list.module';
import { Resolver } from '../resolvers/_resolver.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CelebrityPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    ListModule
  ],
  declarations: [CelebrityPage, CelebrityDetail,CelebrityEdit, CelebrityDelete, CelebrityCreate],
})
export class CelebrityPageModule {}
