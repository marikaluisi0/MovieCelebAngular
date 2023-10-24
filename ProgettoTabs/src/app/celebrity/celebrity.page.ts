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
  titlePage='Lista delle celebrità';

  
   constructor(private readonly _celebService: CelebritiesService,
    private readonly _router: Router) {
    
      this._celebService.celebritiesObs$.subscribe((celebrities: celebrity[]) => {
        this.celebritiesList = celebrities;
      });
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

      delete(id: string) {
        console.log(id);
        this._celebService.delete(id);
      }
    
      create() {
        
        this._router.navigate(['tabs', 'celebrity', 'create']);
      }
      
        
      

}
    






