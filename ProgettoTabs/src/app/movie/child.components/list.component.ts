import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { films } from '../movie.interfaces/movie.interface';


@Component({
  selector: 'app-list',
  templateUrl: 'list.html',
})
export class List implements OnInit {
  @Input() filmsArray: films[] = []; 
 // @Input() filmsArray: List[] = []; 
  @Output() film = new EventEmitter<string>(); 
  @Output() filmEdit = new EventEmitter<string>(); 
  @Output() filmDelete= new EventEmitter<string>();


  filmId: string = "";



  constructor(private readonly _router: Router,
    private readonly _route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params.get('id');
        if (id)
          this.filmId = id;
      }
    })
  }



  clickMovie(id: string) {
    this.film.emit(id);
  }

  clickEdit(id: string) {
    this.filmEdit.emit(id);
  }

  clickDelete(id:string){
    this.filmDelete.emit(id);
  }


}



