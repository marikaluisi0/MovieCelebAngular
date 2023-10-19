import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage {

  constructor() {}

  benvenuto :string= "Benvenuti nella sezione profilo";

  corpo : string="Chi ha contribuito alla creazione dell'app: ";

}
