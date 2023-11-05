import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItems } from '../../interfaces/list.interface';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
@Component({
  selector: 'app-list',
  templateUrl: 'list.html',
  styleUrls: ['list.scss'],

})
export class ListComponent {
  @Input() items: ListItems[] = [];
  @Output() details = new EventEmitter<ListItems>();
  @Output() edit = new EventEmitter<ListItems>();
  @Output() delete = new EventEmitter<ListItems>();
  @Output() movieRatingSliderValue = new EventEmitter<RangeValue>();



  detailsItem(item: ListItems) {
    this.details.emit(item);
  }

  editItem(item: ListItems) {
    this.edit.emit(item);
  }

  deleteItem(item: ListItems) {
    this.delete.emit(item);
  }

  movieRatingSliderChange(e: Event) {
    console.log((e as RangeCustomEvent).detail.value);
    this.movieRatingSliderValue.emit((e as RangeCustomEvent).detail.value);
  }
}
