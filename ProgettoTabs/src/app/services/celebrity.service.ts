import { Injectable } from "@angular/core";
import { celebrity } from "../shared/interfaces/celebrity.interface";
import { Observable, Subject, map } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class CelebritiesService {

    private _subjectC$ = new Subject<celebrity[]>();
    celebritiesObs$ = this._subjectC$.asObservable();
    private _lista: celebrity[] =[];
    private _lunghezzaLista= this._lista.length;
    private _baseUrl = '';

    constructor(private readonly _http: HttpClient) {
        this._baseUrl = environment.baseUrl;  //recupero l'URL
    }

    getCelebrities(): Observable<celebrity[]> {
        return this._http.get<celebrity[]>(`${this._baseUrl}/celebrities`).pipe(map((result: any) => {
            this._subjectC$.next(result.celebrities);
            return result.celebrities;
        }));
    }

    getCelebrityById(id: string): Observable<celebrity> {
        return this._http.get<celebrity>(`${this._baseUrl}/celebrities/${id}`);
    }

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
