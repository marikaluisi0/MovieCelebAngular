import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Film } from '../movie.interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: 'detail.html',
})
export class MovieDetail{

  //movie: films| undefined; //uguale al return del metodo che me lo restituisce ovv.
  //selectedMovieId: string|undefined;

  /*constructor(private _route: ActivatedRoute,
    private _movieService: MoviesService){
      this._route.params.subscribe(params=>{
        this.selectedMovieId=params['id'];
        if (this.selectedMovieId){
         this.movie= this._movieService.getById(this.selectedMovieId)
        }
      })
    }*/

    films:Film|undefined=undefined;
  

    constructor(private readonly _movies: MoviesService,
      private readonly _router : Router,
      private readonly _acroute :ActivatedRoute) {
  
        //SONO EQUIVALENTI
          /*this._acroute.params.subscribe(params=>{
          const id= params['id'];
          this._movies.getMovieById(id).subscribe((movies: films)=>this.films=movies);
          })*/

          this._acroute.paramMap.subscribe(params=>{
            const id: string| null=params.get('id');
            if (id){
              this._movies.getMovieById(id).subscribe((data:Film)=>
              this.films=data);}})

          
  
      }
}