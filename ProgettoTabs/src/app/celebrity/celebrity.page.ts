import { Component } from '@angular/core';
import { celebrity } from '../shared/interfaces/celebrity.interface';
import { CelebritiesService } from '../services/celebrity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebrity',
  templateUrl: 'celebrity.page.html',
  styleUrls: ['celebrity.page.scss']
})
export class CelebrityPage {

  celebritiesList: celebrity[]=[];

  constructor(private readonly _celebService: CelebritiesService,
    private readonly _router: Router) {
      this.celebritiesList= this._celebService.getCelebrities();
    }

    ionViewWillEnter(){
      this._celebService.getCelebrities();
    }


}
    






