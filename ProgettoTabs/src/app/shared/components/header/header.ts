import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
})
export class HeaderComponent {
    @Input() title="";
    @Input() showAdd=false;
    @Input() showBack= true;

    @Output() addEvent= new EventEmitter<void>();

    onClickCreate(){
        this.addEvent.emit();
    }



}


