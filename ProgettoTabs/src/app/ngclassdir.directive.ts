import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[questoFilmFaSchifo]',
})
export class NgclassdirDirective {
  constructor(
    private _el: ElementRef //tipo di dato che praticamente prende il mio "h1" dal html
  ) {}
  @Input() set questoFilmFaSchifo(badRating: Boolean) {
    if (badRating) {
      this._el.nativeElement.style.color = '#492000';
    }
  }
}
