import { NgModule } from '@angular/core';
import { ListComponent} from './list.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToIntPipe } from 'src/app/shared/pipes/to-int.pipe';
import { OrderByPipe } from '../../pipes/order-by-rating.pipe';
import { ProgressBar } from '../progressbar.wrapper/progressbar.component';
import { RangeBarComponent } from '../rangebar.wrapper/rangebar.component';
import { NgclassdirDirective } from 'src/app/ngclassdir.directive';


@NgModule({
    declarations: [
        ListComponent, ToIntPipe, OrderByPipe, ProgressBar, RangeBarComponent, NgclassdirDirective
    ],
    exports: [
        ListComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ListModule { }

