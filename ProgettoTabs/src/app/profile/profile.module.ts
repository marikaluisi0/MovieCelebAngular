import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { DetailPage } from './childComponents/profile.detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //ExploreContainerComponentModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, DetailPage]
})
export class ProfilePageModule {}
