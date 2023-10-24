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

    constructor(private readonly _movies: MoviesService,
        private readonly _router: Router
     ) {
        this._setForm();
          }
        
        private _setForm() {
        this.create = new FormGroup({
            title1: new FormControl("", Validators.required),
            genres: new FormControl(""),
            startYear: new FormControl(""),
            runtimeMinutes: new FormControl(""),
        })
        this.create.valueChanges.subscribe((form:FormGroup) => console.log(form));
    }
    
      submitForm(){
        console.log(this.create?.value);
        if (this.create?.valid){
            this._movies.create(this.create.value);
            this._router.navigate(['/tabs/movie']);
        }
      }

      
    
    
}