import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { films } from '../movie.interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.html',
})
export class List implements OnInit {
  @Input() filmsArray: films[] = []; //si
  @Output() film = new EventEmitter<string>(); //si
  @Output() filmEdit = new EventEmitter<string>(); //si


  movieId: string = "";



  constructor(private readonly _router: Router,
    private readonly _route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params.get('id');
        if (id)
          this.movieId = id;
      }
    })
  }



  clickMovie(id: string) { //nella list //si
    this.film.emit(id);
  }

  clickEdit(id: string) {
    this.filmEdit.emit(id);
  }







}



