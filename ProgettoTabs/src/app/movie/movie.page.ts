import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviesService } from '../services/movie.service';
import { films } from './movie.interfaces/movie.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { List } from './child.components/list.component';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})

//CONCETTI: UN OBSERVABLE HA SEMPRE UN OSSERVATORE DA QUALCHE ALTRA PARTE, UN SUBSCRIBE!!!
export class MoviePage {
  moviesList: films[] = [];
  titlePage = 'Lista dei film';

  constructor(private readonly _movies: MoviesService,
    private readonly _router: Router,
    private readonly _acroute: ActivatedRoute) {

    //this._movies.filmsObs$.subscribe((moviesList: films[])=>{});

    this._movies.getMovies().subscribe((films: films[]) => {
      console.log(films);
      this.moviesList = films;
    });

  }

  private _getList() {
    this._movies.getMovies().subscribe((films: films[]) => {
      console.log(films);
      this.moviesList = films;
    });
  }

  //MI SERVE PER FAR RIAGGIORNARE LA LISTA QUANDO RITORNO ALLA ROTTA /MOVIE, se resto mi serve la _getList()
  ionViewWillEnter() {
    this._getList();

  }

  edit(id: string) { //si
    console.log(id);
    this._router.navigate(['tabs', 'movie', 'detail', id]);
  }

  modifica(id: string) { //mi modifica il film
    console.log(id);
    this._router.navigate(['tabs', 'movie', 'edit', id]);
  }

  delete(id: string) {
    console.log(id);
    this._movies.delete(id).subscribe((selectedMovie: films) => { this._getList(); });
  }

  create() {
    // this._movies.create(film);
    this._router.navigate(['tabs', 'movie', 'create']);
  }


}
