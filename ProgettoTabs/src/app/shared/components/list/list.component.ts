import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItems } from '../../interfaces/list.interface';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { FormGroup } from '@angular/forms';
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
  @Output() rating = new EventEmitter<RangeValue>();
  research!: FormGroup;

  



  detailsItem(item: ListItems) {
    this.details.emit(item);
  }

  editItem(item: ListItems) {
    this.edit.emit(item);
  }

  deleteItem(item: ListItems) {
    this.delete.emit(item);
  }

  ratingItem(event: Event) {
    console.log((event as RangeCustomEvent).detail.value);
    this.rating.emit((event as RangeCustomEvent).detail.value);
  }

}
