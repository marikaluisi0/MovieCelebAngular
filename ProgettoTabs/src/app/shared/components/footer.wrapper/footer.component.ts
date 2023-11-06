import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/movie/movie.interfaces/movie.interface';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.html',
})
export class FooterComponent {
  @Input() movieDetail: Film | undefined;

  constructor(private _router: Router,
    private _route: ActivatedRoute){
  }

  seeMovieDetail(id: string){
    this._router.navigate(['detail', id], { relativeTo: this._route });
  }
}