import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Films } from '../movie.interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-movie-edit',
  templateUrl: 'edit.html',
})
export class MovieEdit{


    //mov?: films; //?=opzionale 
   // @Output() filmEdit= new EventEmitter<string>(); //si 
    formUser: FormGroup | undefined;
    films:Films|undefined=undefined;

    constructor(private readonly _movies: MoviesService,
      private readonly _router : Router,
      private readonly _acroute :ActivatedRoute,
     //private readonly _location: Location
     ) {
           this._acroute.params.subscribe(params=>{ 
           const id= params['id'];
           this._movies.getMovieById(id).subscribe((movies: Films)=>{
            
            this.films=movies;
            this._setForm();

          });
          
          })
  
      }

      

      private _setForm(){
        this.formUser = new FormGroup({//creo una form che rispetta tutta la struttura che creo in questo form
            id: new FormControl(this.films?.id),
            title: new FormControl(this.films?.title, Validators.required),
            genres: new FormControl(this.films?.genres),
            year: new FormControl(this.films?.year),
            runningTime:new FormControl(this.films?.runningTime),

           })

           this.formUser.valueChanges.subscribe((x)=>{
            console.log(x);
           })
        
      }

       submitForm(){
        console.log(this.formUser?.value);
        if (this.formUser?.valid){
           this._movies.update(this.formUser?.value).subscribe((filmSelected: Films)=>{
            this._router.navigate(['/tabs/movie']);
           });
        }
 
      }







     
}