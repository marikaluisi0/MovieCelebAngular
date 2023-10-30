import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CelebritiesService } from 'src/app/services/celebrity.service';
import { Celebrity } from 'src/app/shared/interfaces/celebrity.interface';


@Component({
  selector: 'app-celebrity-detail',
  templateUrl: 'detail.html',
})
export class CelebrityDetail {

  celebrity?: Celebrity; //opzionale 

  constructor(//private readonly _celebrity: CelebritiesService,
    //private readonly _router : Router,
    _acroute: ActivatedRoute) {

    /* this._acroute.params.subscribe(params=>{ 
       const id= params['id'];
       this._celebrity.getCelebrityById(id).subscribe((cel: Celebrity)=>this.celebrity=cel);
 
   })*/

    // this.celebrity=_acroute.snapshot.data['celebrity']; //lo uso nel construttore solo, quindi il prv non è indispensabile
    _acroute.data.subscribe((data) => {
      this.celebrity = data['celebrity']; //nel routing è dove abbiamo definito il nostro "data"
    });

    /*destrutturiamo: inserendo nella firma direttamente le chiavi che ci interessano nell'oggetto data e rende anche il codice più veloce
    _acroute.data.subscribe(({celebrity}) => {
      this.celebrity = celebrity; //nel routing è dove abbiamo definito il nostro "data"
    });*/



  }



}

