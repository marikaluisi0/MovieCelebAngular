import { Component, OnInit } from '@angular/core';
import { Celebrity } from '../shared/interfaces/celebrity.interface';
import { CelebritiesService } from '../services/celebrity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListItems } from '../shared/interfaces/list.interface';


@Component({
  selector: 'app-celebrity',
  templateUrl: 'celebrity.page.html',
  styleUrls: ['celebrity.page.scss']
})
export class CelebrityPage /*implements OnInit*/ {

  celebritiesList: ListItems[] = [];
  titlePage = 'Lista delle celebrità';


  constructor(private readonly _celebService: CelebritiesService,
    private readonly _router: Router,
    private readonly _acRoute: ActivatedRoute) {
    this._getCelebrities();
  }

  private _getCelebrities(): void {
    this._celebService.getCelebrities().subscribe((result: Celebrity[]) => {
      console.log(result);
      this.celebritiesList = result.map((element: Celebrity) => {
        return {
          id: element.id,
          text: element.name,
        };
      });;
    });
  }


  ionViewWillEnter() {
    this._getCelebrities();
  }

  getList(item: ListItems): void {
    console.log(item.id);
    this._router.navigate(['tabs', 'celebrity', 'detail', item.id]);
  }

  modifica(item: ListItems): void {
    console.log(item.id);
    this._router.navigate(['tabs', 'celebrity', 'edit', item.id]);
  }

  delete(item: ListItems) {
    console.log(item.id);
    this._celebService.delete(item.id).subscribe((result: Celebrity) => { this._getCelebrities(); });
  }

  create(): void {

    this._router.navigate(['tabs', 'celebrity', 'create']);
  }



  



}







