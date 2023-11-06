import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[questoFilmFaSchifo]',
})
export class NgclassdirDirective {
  constructor(
    private _el: ElementRef<HTMLHeadingElement> //tipo di dato che praticamente prende il mio "h1" dal html
  ) {}
  @Input() set questoFilmFaSchifo(rating: number) {
    if (rating<=this.minRating) {
      this._el.nativeElement.style.color = '#492000';
    }
    else{
      this._el.nativeElement.style.color ='inherit';
    }
  } 
  @Input() minRating=0;
}
