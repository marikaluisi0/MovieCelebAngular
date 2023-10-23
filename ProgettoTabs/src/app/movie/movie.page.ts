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
 moviesList: films[] = [];
  constructor(private readonly _movies: MoviesService,
    private readonly _router : Router,
    private readonly _acroute :ActivatedRoute) {
      
      
    // this.moviesList = this._movies.getMovies(); //NEL COSTRUTTORE IMPORTANTE!
     this._movies.filmsObs$.subscribe((films) => {
      this.moviesList = films;
     });
    }



    ionViewWillEnter(){
      this._movies.getMovies();
    }

   /* private _getFilms(){
      this.lista=this.moviesService.getList().map((values: Film))=>{

        return 
      }
    }*/


edit(id:string){ //si
console.log(id);  
this._router.navigate(['tabs', 'movie', 'detail', id]);
}

modifica(id: string){ //mi modifica il film
  console.log(id);
  this._router.navigate(['tabs', 'movie', 'edit', id]);
}



}
