import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CelebritiesService } from 'src/app/services/celebrity.service';
import { Celebrity } from 'src/app/shared/interfaces/celebrity.interface';


@Component({
    selector: 'app-celebrity-delete',
    templateUrl: 'delete.html',
})
export class CelebrityDelete {

    celebrities: Celebrity | undefined = undefined;



    constructor(private readonly _celebrityService: CelebritiesService,
        private readonly _router: Router,
        private readonly _acroute: ActivatedRoute,
    ) {
        this._acroute.params.subscribe(params => {
            const id = params['id'];
            this._celebrityService.getCelebrityById(id).subscribe((celebrities: Celebrity) => {
                this.celebrities = celebrities;
            });
        })

    }













}








