import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CelebritiesService } from 'src/app/services/celebrity.service';
import { celebrity } from 'src/app/shared/interfaces/celebrity.interface';


@Component({
  selector: 'app-celebrity-detail',
  templateUrl: 'detail.html',
})
export class CelebrityDetail{

  celebrity?: celebrity; //opzionale 

    constructor(private readonly _celebrity: CelebritiesService,
      private readonly _router : Router,
      private readonly _acroute :ActivatedRoute) {
  
        this._acroute.paramMap.subscribe(params=>{
          const id: string|null= params.get('id');
           this.celebrity= this._celebrity.getCelebrityById(id);
        })
  
      }
}