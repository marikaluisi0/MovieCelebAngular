import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviesService } from '../services/movie.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ListItems } from '../shared/interfaces/list.interface';
import { Film } from './movie.interfaces/movie.interface';
import { BehaviorSubject, Observable, Subject, combineLatest, filter, map, timer } from 'rxjs';
import { RangeCustomEvent } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss'],
})

//CONCETTI: UN OBSERVABLE HA SEMPRE UN OSSERVATORE DA QUALCHE ALTRA PARTE, UN SUBSCRIBE!!!
export class MoviePage {
  list: ListItems[] = []; //proprietà per lista non filtrata
  moviesList: ListItems[] = [];
  pageTitle = 'Lista dei film';
  ratingRange$ = new BehaviorSubject<number>(0); //istanzio una BS che all'inizio ha già valore per rating con 0
  research!: FormGroup;
  research$= new Subject<string>();



  constructor(
    private readonly _movies: MoviesService,
    private readonly _router: Router,
    private readonly _acroute: ActivatedRoute
  ) {
    //this.onInitialMoviesList();
    //this._getListRating();
    /// non mi serve inizializzare il form se uso "!" 
    this.research = new FormGroup({
      ricerca: new FormControl("", Validators.required)
    })
    this.researchByTitle();
  

  }

  /*private _getList(): void {
    this._movies.getMovies().subscribe((films: Film[]) => {
      console.log(films);
      this.moviesList = films.map(({ id, title, rating }) => {
        return {
          id,
          text: title,
          rating: rating.averageRating,
        };
      });
    });
  }*/

  //MI SERVE PER FAR RIAGGIORNARE LA LISTA QUANDO RITORNO ALLA ROTTA /MOVIE, se resto mi serve la _getList()
  /* ionViewWillEnter(): void {
    this._getListRating();
  }*/

  edit(item: ListItems): void {
    //si
    console.log(item.id);
    this._router.navigate(['tabs', 'movie', 'detail', item.id]);
  }

  modifica(item: ListItems): void {
    //mi modifica il film
    console.log(item.id);
    this._router.navigate(['tabs', 'movie', 'edit', item.id]);
  }

  delete(item: ListItems): void {
    console.log(item.id);
    this._movies.delete(item.id).subscribe((selectedMovie: Film) => {
      //this._getList();
    });
  }

  create(): void {
    this._router.navigate(['tabs', 'movie', 'create']);
  }

  //E' il metodo che mappa i film e visualizza anche la votazione media>5
  /*private _getListRating(value = 0): void {
    /*this._movies
      .getMovies()
      .pipe(
        map((movies) =>
          movies.filter((movie) => movie.rating.averageRating >= value)
        ),
        map((elements: Film[]) => {
          return elements.map(({ id, title, rating }) => {
            return {
              id,
              text: title,
              rating: rating.averageRating / 10,
            };
          });
        })
      )
      .subscribe((films) => {
        console.log(films);
        this.moviesList = films;
      });*/
  /* this.moviesList = this.list
      .filter((movie) => {movie.rating.averageRating >= value})
      .map(({ id, title, rating }) => {
        return {
          id,
          text: title,
          rating: rating.averageRating / 10,
        };
      });
  }*/

  /*onInitialMoviesList() {
    this._movies.getMovies().subscribe((movies) => {
      this.list = movies;
    });
  } */

  ionViewWillEnter() {
    combineLatest({
      movieList: this._movies.getMovies(),
      rating: this.ratingRange$,
    }).subscribe(({ movieList, rating }) => {
      this.list = movieList.map((element) => {
        return {
          id: element.id,
          text: element.title,
          rating: element.rating.averageRating / 10,
        };
      });
      this._getMoviesWithAvgRating(rating);
    });
  }

  private _getMoviesWithAvgRating(rating: number) {
    this.moviesList = this.list.filter(
      (movie) => (movie.rating || 0) > rating / 10
    );
  }

  //E' il metodo che mappa i film e visualizza anche la votazione media da slider
  onIonChange(ev: Event) {
    console.log(
      'ionChange emitted value:',
      (ev as RangeCustomEvent).detail.value
    );
    //const valore = (ev as RangeCustomEvent).detail.value;
    //console.log(valore);
    // this._getListRating(valore as number);
    this.ratingRange$.next(Number((ev as RangeCustomEvent).detail.value));
  }

  

  researchByTitle() {
    this.research = new FormGroup({
        ricerca:new FormControl()
    });

    this.research.get('ricerca')?.valueChanges.pipe(
      debounceTime(500),
      switchMap((title:string)=>this._movies.getMoviesByTitle(title)))
      .subscribe((data)=>this.moviesList=data.map((element) => {
        return {
          id: element.id,
          text: element.title,
          rating: element.rating.averageRating / 10,
        };
      }))
}



 



 
}
