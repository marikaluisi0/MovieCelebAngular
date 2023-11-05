import { NgModule } from '@angular/core';
import { ListComponent} from './list.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToIntPipe } from 'src/app/shared/pipes/to-int.pipe';
import { OrderByPipe } from '../../pipes/order-by-rating.pipe';
import { RangeBarComponent } from '../rangebar.wrapper/rangebar.component';
import { ProgressBar } from '../progressbar.wrapper/progressbar.component';


@NgModule({
    declarations: [
        ListComponent, ToIntPipe, OrderByPipe, RangeBarComponent, ProgressBar
    ],
    exports: [
        ListComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ]
})
export class ListModule { }

