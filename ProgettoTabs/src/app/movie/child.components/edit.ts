import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { films } from '../movie.interfaces/movie.interface';
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
    films:films|undefined=undefined;
    


    constructor(private readonly _movies: MoviesService,
      private readonly _router : Router,
      private readonly _acroute :ActivatedRoute,
     //private readonly _location: Location
     ) {
           this._acroute.params.subscribe(params=>{ 
           const id= params['id'];
           this.films=this._movies.getMovieById(id);
           this._setForm();
          })

      

  
      }

      

      private _setForm(){
        this.formUser = new FormGroup({//creo una form che rispetta tutta la struttura che creo in questo form
            id: new FormControl(this.films?.id),
            title1: new FormControl(this.films?.title, Validators.required),
            genres: new FormControl(this.films?.genres),
            startYear: new FormControl(this.films?.startYear),
            runtimeMinutes:new FormControl(this.films?.runtimeMinutes),
            celebrities: new FormControl(this.films?.celebrities),
            countries: new FormControl(this.films?.countries),
           })

           this.formUser.valueChanges.subscribe((x)=>{
            console.log(x);
           })
        
      }

    
       submitForm(){
        console.log(this.formUser?.value);
        if (this.formUser?.valid){
           this._movies.update(this.formUser?.value);
            //subscribe(()=>)
            this._router.navigate(['/tabs/movie']);
            //this._location.back();
        //)
        }




 

 
      }







     
}