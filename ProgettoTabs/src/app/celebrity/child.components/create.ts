import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CelebritiesService } from 'src/app/services/celebrity.service';

@Component({
  selector: 'app-celebrity-create',
  templateUrl: 'create.html',
})
export class CelebrityCreate{


    create: FormGroup | undefined;

    constructor(private readonly _celebrity: CelebritiesService,
        private readonly _router: Router
     ) {
        this._setForm();
          }
        
        private _setForm() {
        this.create = new FormGroup({
            title: new FormControl("", Validators.required),
            genres: new FormControl(""),
            startYear: new FormControl(""),
            runtimeMinutes: new FormControl(""),
        })
        this.create.valueChanges.subscribe((form:FormGroup) => console.log(form));
    }
    
      submitForm(){
        console.log(this.create?.value);
        if (this.create?.valid){
            this._celebrity.create(this.create.value);
            this._router.navigate(['/tabs/movie']);
        }
      }

      
    
    
}