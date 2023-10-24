/*import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';


@Component({
    selector: 'app-movie-delete',
    templateUrl: 'delete.html',
})
export class MovieDelete{

    films:films|undefined=undefined;
    


    constructor(private readonly _movies: MoviesService,
      private readonly _router : Router,
      private readonly _acroute :ActivatedRoute,
     ) {
           this._acroute.params.subscribe(params=>{ 
           const id= params['id'];
           this.films=this._movies.getMovieById(id);
           //this._movies.delete; FUNZIONA LO STESSO
          })
  
      }


    




 

 
      }







     */
