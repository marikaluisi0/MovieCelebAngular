import { NgModule } from '@angular/core';
import { ListComponent} from './list.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListComponent,
  ],
  exports: [
    ListComponent,
  ]
})
export class ListModule { }

