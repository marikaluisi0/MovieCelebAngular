import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItems } from '../../interfaces/list.interface';
import { RangeCustomEvent } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: 'list.html',
})
export class ListComponent {
  @Input() items: ListItems[] = [];
  @Output() details = new EventEmitter<ListItems>();
  @Output() edit = new EventEmitter<ListItems>();
  @Output() delete = new EventEmitter<ListItems>();

  


  detailsItem(item: ListItems) {
    this.details.emit(item);
  }

  editItem(item: ListItems) {
    this.edit.emit(item);
  }

  deleteItem(item: ListItems) {
    this.delete.emit(item);
  }

  
}
