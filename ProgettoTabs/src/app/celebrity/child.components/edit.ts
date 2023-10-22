import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { celebrity } from 'src/app/shared/interfaces/celebrity.interface';
import { CelebritiesService } from 'src/app/services/celebrity.service';


@Component({
  selector: 'app-celebrity-edit',
  templateUrl: 'edit.html',
})
export class CelebrityEdit{


    celebrity?: celebrity;  
    formCel: FormGroup | undefined;

    constructor(private readonly _cel: CelebritiesService,
      private readonly _router : Router,
      private readonly _acroute :ActivatedRoute,
     ) {
  
        this._acroute.paramMap.subscribe(params=>{ 
          const id: string|null= params.get('id');
           this.celebrity= this._cel.getCelebrityById(id); 
           this._setForm();
        })
  
      }

      private _setForm(){
        this.formCel = new FormGroup({//creo una form che rispetta tutta la struttura che creo in questo form
            id: new FormControl(this.celebrity?.id),
            name: new FormControl(this.celebrity?.primary_name, Validators.required),
            birth: new FormControl(this.celebrity?.birthYear),
            death: new FormControl(this.celebrity?.deathYear),
            movies:new FormControl(this.celebrity?.movies),
        })
      }



       submitForm(){
        console.log(this.formCel?.value);
        if (this.formCel?.valid){
            this._cel.update(this.formCel?.value);
            //.subscribe(()=>
            this._router.navigate(['/tabs/celebrity']);
            //this._location.back();
        //)
        }
      }







     
}