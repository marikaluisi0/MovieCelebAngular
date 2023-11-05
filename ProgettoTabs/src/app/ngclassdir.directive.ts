import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appNgclassdir]',
})
export class NgclassdirDirective {
  constructor(
    private _el: ElementRef //tipo di dato che praticamente prende il mio "h1" dal html
  ) {}
  @Input() set rating(badRating: Boolean) {
    if (badRating === true) {
      console.log('si');
      this._el.nativeElement.style.color = '#492000';
    }
  }

}
