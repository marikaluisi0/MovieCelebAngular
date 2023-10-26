import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Films } from '../movie.interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';


@Component({
    selector: 'app-movie-delete',
    templateUrl: 'delete.html',
})
export class MovieDelete {

    films: Films | undefined = undefined;



    constructor(private readonly _movies: MoviesService,
        private readonly _router: Router,
        private readonly _acroute: ActivatedRoute,
    ) {
        this._acroute.params.subscribe(params => {
            const id = params['id'];
            this._movies.getMovieById(id).subscribe((movies: Films) => {
                this.films = movies;
            });
        })

    }










}








