import { Injectable } from "@angular/core";
import { celebrity } from "../shared/interfaces/celebrity.interface";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class CelebritiesService {

    private _subjectC$ = new Subject<celebrity[]>();
    celebritiesObs$ = this._subjectC$.asObservable();
    private _lista: celebrity[] =

        [
            {
                id: "celeb1",
                primary_name: "Michael B Jordan",
                birthYear: 1987,
            },

            {
                id: "celeb2",
                primary_name: "Zendaya",
                birthYear: 1996,
            },

            {
                id: "celeb3",
                primary_name: "Will Smith",
                birthYear: 1968,
            }
        ]
        private _lunghezzaLista= this._lista.length;





    getCelebrities(): void {
        return this._next(); 
    }

    getCelebrityById(id: string): celebrity|undefined {
        return this._lista.find((_lista:celebrity)=>_lista.id===id);}

    update(celebritySelected: celebrity) {
        
        const index = this._getIndex(celebritySelected.id);
        if (index !== -1) {
            this._lista[index] = celebritySelected;
        }
        this._next();
    }

    delete(idSelected : string){
        const index = this._getIndex(idSelected);
        if (index !== -1) {
           this._lista.splice(index, 1);   
           this._next();
        }
        }

        create(celebrity: celebrity){
            celebrity.id=(this._lunghezzaLista+=1).toString();
            this._lista.push(celebrity);
            this._next();
        }

         private _getIndex(id: string): number{
            return this._lista.findIndex((celebrity: celebrity) => celebrity.id === id);
         }

         private _next(){
            this._subjectC$.next(this._lista); 
         }




}
