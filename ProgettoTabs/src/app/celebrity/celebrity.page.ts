import { Component } from '@angular/core';
import { celebrity } from '../shared/interfaces/celebrity.interface';
import { CelebritiesService } from '../services/celebrity.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
///import { from } from 'rxjs';


@Component({
  selector: 'app-celebrity',
  templateUrl: 'celebrity.page.html',
  styleUrls: ['celebrity.page.scss']
})
export class CelebrityPage {

  celebritiesList: celebrity[]=[];
  //array=[10,20,30];
  //result=from(this.array);
  
    observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
      subscriber.next(5);
    }, 1000);


  });

  


  

  constructor(private readonly _celebService: CelebritiesService,
    private readonly _router: Router) {
      this.celebritiesList= this._celebService.getCelebrities();
      
      //this.result.subscribe(x=>console.log(x));

      console.log('just before subscribe');
      this.observable.subscribe({
    next(x) {
    console.log('got value ' + x);
    },
    error(err) {
    console.error('something wrong occurred: ' + err);
    },
    complete() {
    console.log('done');
    },
    });
    console.log('just after subscribe');

    }

    ionViewWillEnter(){
      this._celebService.getCelebrities();
    }

    getList(id:string){ 
      console.log(id);  
      this._router.navigate(['tabs', 'celebrity', 'detail', id]);
      }

      modifica(id: string){
        console.log(id);
        this._router.navigate(['tabs', 'celebrity', 'edit', id]);
      }

      
        
      

}
    






