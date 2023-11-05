import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgclassdir]'
})
export class NgclassdirDirective {

@Input()
  color!: string;

  constructor(private _el: ElementRef)//tipo di dato che praticamente prende il mio "h1" dal html
   {
    this.questoFilmFaCagare(this.color);
    }
    questoFilmFaCagare(rating: string
    ):void{
      console.log("sono qui");
      this._el.nativeElement.style.color=rating;

    /*if(this.rating<=5){
      this._el.nativeElement.style.color="yellow";
    }*/

   }

}
