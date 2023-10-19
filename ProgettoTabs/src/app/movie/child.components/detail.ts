import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { films } from '../movie.interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: 'detail.html',
})
export class MovieDetail{}