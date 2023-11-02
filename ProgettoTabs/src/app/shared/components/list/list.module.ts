import { NgModule } from '@angular/core';
import { ListComponent} from './list.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToIntPipe } from 'src/app/shared/pipes/to-int.pipe';
import { OrderByPipe } from '../../pipes/order-by-rating.pipe';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,


  ],
  declarations: [
    ListComponent, ToIntPipe, OrderByPipe
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }

