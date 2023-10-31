import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../movie.interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: 'create.html',
})
export class MovieCreate {


  create: FormGroup | undefined;

  constructor(private readonly _movies: MoviesService,
    private readonly _router: Router
  ) {
    this._setForm();
  }

  private _setForm() {
    this.create = new FormGroup({
      id: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required),
      genres: new FormControl(""),
      year: new FormControl(""),
      runningTime: new FormControl(""),
      averageRating:new FormControl("", Validators.required),
      numVotes: new FormControl("", Validators.required)
    })
    this.create.valueChanges.subscribe((form: FormGroup) => console.log(form));
  }

  submitForm() {
    console.log(this.create?.value);
    if (this.create?.valid) {
      this._movies.create(this.create.value).subscribe((filmSelected: Film)=>{
        this._router.navigate(['/tabs/movie']);
       });
    
    }
  }




}