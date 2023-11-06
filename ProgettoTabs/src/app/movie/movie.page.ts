import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviesService } from '../services/movie.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ListItems } from '../shared/interfaces/list.interface';
import { Film } from './movie.interfaces/movie.interface';
import {
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  filter,
  map,
  timer,
} from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { RangeValue } from '@ionic/core';

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

  constructor(
    private readonly _movies: MoviesService,
    private readonly _router: Router,
    private readonly _acroute: ActivatedRoute
  ) {
    //this.onInitialMoviesList();
    //this._getListRating();
    /// non mi serve inizializzare il form se uso "!"
    this.research = new FormGroup({
      ricerca: new FormControl('', Validators.required),
    });
    // this.researchByTitle();
    this.ratingRange$.subscribe((selectedDecimalRating) =>
      this.updateRatingFilteredMovieList(selectedDecimalRating)
    );
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
          year: element.year,
          attori: element.cast?.map((cast) => {
            return {
              celebrityName: cast.celebrityName,
              celebrityId: cast.celebrityId,
              movieTitle: cast.movieTitle,
              movieId: cast.movieId,
              category: cast.category,
            };
          }),
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
  /* onIonChange(ev: Event) {
    console.log(
      'ionChange emitted value:',
      (ev as RangeCustomEvent).detail.value
    );
    this.ratingRange$.next(Number((ev as RangeCustomEvent).detail.value));
  }*/

  researchByTitle() {
    this.research = new FormGroup({
      ricerca: new FormControl(),
    });

    this.research
      .get('ricerca')
      ?.valueChanges.pipe(
        debounceTime(500),
        switchMap((title: string) => this._movies.getMoviesByTitle(title)),
        switchMap((movies: Film[]) => {
          this.list = movies.map((movie) => {
            return {
              id: movie.id,
              text: movie.title,
              rating: movie.rating.averageRating,
              year: movie.year,
              attori: movie.cast?.map((cast) => {
                return {
                  celebrityName: cast.celebrityName,
                  celebrityId: cast.celebrityId,
                  movieTitle: cast.movieTitle,
                  movieId: cast.movieId,
                  category: cast.category,
                };
              }),
            };
          });
          return this.ratingRange$;
        })
      )
      .subscribe((rating) => {
        this.updateRatingFilteredMovieList(rating);
      });

    /*.subscribe(
        (data) =>
          (this.moviesList = data.map((element) => {
            return {
              id: element.id,
              text: element.title,
              rating: element.rating.averageRating / 10,
              year: element.year,
            };
          }))
      );*/
  }

  setMovieSearchRating(rating: RangeValue) {
    const decimalRating = Number(rating) / 10;
    this.ratingRange$.next(decimalRating);
  }

  updateRatingFilteredMovieList(selectedDecimalRating: number): void {
    this.moviesList = this.list.filter(
      (movie) => (movie.rating || 0) >= selectedDecimalRating
    );
  }
}
