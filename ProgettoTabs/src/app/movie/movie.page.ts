import { Component } from '@angular/core';
import { MoviesService } from '../services/movie.service';
import { films } from './movie.interfaces/movie.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage {

  constructor(private readonly _movies: MoviesService,
    private readonly _router : Router,
    private readonly _acroute :ActivatedRoute) {}

  moviesList: films[] = this._movies.getMovies();
 // film :film=this._moviesgetMovie();

edit(id:string){ //si
console.log(id);  
this._router.navigate(['tabs', 'movie', 'detail', id]);


}

}
