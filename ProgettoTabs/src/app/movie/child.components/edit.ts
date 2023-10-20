import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { films } from '../movie.interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-movie-edit',
  templateUrl: 'edit.html',
})
export class MovieEdit{


    mov?: films; //?=opzionale 
   // @Output() filmEdit= new EventEmitter<string>(); //si 
    formUser: FormGroup | undefined;

    constructor(private readonly _movies: MoviesService,
      private readonly _router : Router,
      private readonly _acroute :ActivatedRoute,
     // private readonly _location: Location
     ) {
  
        this._acroute.paramMap.subscribe(params=>{ 
          const id: string|null= params.get('id');
           this.mov= this._movies.getMovieById(id); //mi salva il film
           this._setForm();
        })
  
      }

      private _setForm(){
        this.formUser = new FormGroup({//creo una form che rispetta tutta la struttura che creo in questo form
            id: new FormControl(this.mov?.id),
            title1: new FormControl(this.mov?.title, Validators.required),
            genres: new FormControl(this.mov?.genres),
            startYear: new FormControl(this.mov?.startYear),
            runtimeMinutes:new FormControl(this.mov?.runtimeMinutes),
            celebrities: new FormControl(this.mov?.celebrities),
            countries: new FormControl(this.mov?.countries)
        })
      }



       submitForm(){
        console.log(this.formUser?.value);
        if (this.formUser?.valid){
            this._movies.update(this.formUser?.value);
            //.subscribe(()=>
            this._router.navigate(['/tabs/movie']);
            //this._location.back();
        //)
        }
      }











          //  clickEdit(id:string){  LO INSERISCO NEL COMP LISTA
      //  this.filmEdit.emit(id);
      //}

     
}