import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviesService } from '../services/movie.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ListItems } from '../shared/interfaces/list.interface';
import { Films } from './movie.interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})

//CONCETTI: UN OBSERVABLE HA SEMPRE UN OSSERVATORE DA QUALCHE ALTRA PARTE, UN SUBSCRIBE!!!
export class MoviePage {
  moviesList: ListItems[] = [];
  pageTitle = 'Lista dei film';

  constructor(private readonly _movies: MoviesService,
    private readonly _router: Router,
    private readonly _acroute: ActivatedRoute) {
    this._getList();

  }

  private _getList(): void {
    this._movies.getMovies().subscribe((films: Films[]) => {
      console.log(films);
      this.moviesList = films.map((element: Films) => {
        return {
          id: element.id,
          text: element.title,
        };
      });;
    });
  }

  //MI SERVE PER FAR RIAGGIORNARE LA LISTA QUANDO RITORNO ALLA ROTTA /MOVIE, se resto mi serve la _getList()
  ionViewWillEnter(): void {
    this._getList();

  }

  edit(item: ListItems): void { //si
    console.log(item.id);
    this._router.navigate(['tabs', 'movie', 'detail', item.id]);
  }

  modifica(item: ListItems): void { //mi modifica il film
    console.log(item.id);
    this._router.navigate(['tabs', 'movie', 'edit', item.id]);
  }

  delete(item: ListItems): void {
    console.log(item.id);
    this._movies.delete(item.id).subscribe((selectedMovie: Films) => { this._getList(); });
  }

  create(): void {
    this._router.navigate(['tabs', 'movie', 'create']);
  }


}
