import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { films } from '../movie.interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: 'create.html',
})
export class MovieCreate{

    create: FormGroup | undefined;
    films:films|undefined=undefined;
    


    constructor(private readonly _movies: MoviesService,
      private readonly _router : Router,
      private readonly _acroute :ActivatedRoute,
     ) {
           this._acroute.params.subscribe(params=>{ 
           const id= params['id'];
           this.films=this._movies.getMovieById(id);
           this._setForm();
          })
      }

      private _setForm(){
        this.create = new FormGroup({
            id: new FormControl(this.films?.id),
            title1: new FormControl(this.films?.title, Validators.required),
            genres: new FormControl(this.films?.genres),
            startYear: new FormControl(this.films?.startYear),
            runtimeMinutes:new FormControl(this.films?.runtimeMinutes),
            celebrities: new FormControl(this.films?.celebrities),
            countries: new FormControl(this.films?.countries),
           })

           this.create.valueChanges.subscribe((x)=>{
            console.log(x);
           })
        
      }
    
      submitForm(){
        console.log(this.create?.value);
        if (this.create?.valid){
           this._movies.update(this.create?.value);
            this._router.navigate(['/tabs/movie']);
        }
      }
    
}