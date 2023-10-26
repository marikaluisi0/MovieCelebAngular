import { Injectable } from "@angular/core";
import { Celebrity } from "../shared/interfaces/celebrity.interface";
import { Observable, Subject, map } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class CelebritiesService {

    private _subjectC$ = new Subject<Celebrity[]>();
    celebritiesObs$ = this._subjectC$.asObservable();
    private _lista: Celebrity[] = [];
    private _lunghezzaLista = this._lista.length;
    private _baseUrl = '';

    constructor(private readonly _http: HttpClient) {
        this._baseUrl = environment.baseUrl;  //recupero l'URL
    }

    getCelebrities(): Observable<Celebrity[]> {
        return this._http.get<Celebrity[]>(`${this._baseUrl}/celebrities?order_by=id&page=0&size=20`).pipe(map((result: any) => {
            this._subjectC$.next(result.celebrities);
            return result.celebrities;
        }));
    }

    getCelebrityById(id: string): Observable<Celebrity> {
        return this._http.get<Celebrity>(`${this._baseUrl}/celebrities/${id}`);
    }

    update(celebritySelected: Celebrity): Observable<Celebrity> {

        /*const index = this._getIndex(celebritySelected.id);
        if (index !== -1) {
            this._lista[index] = celebritySelected;
        }
        this._next();*/

        return this._http.put<Celebrity>(`${this._baseUrl}/celebrities/${celebritySelected.id}`, celebritySelected);


    }

    delete(idSelected: string): Observable<Celebrity> {
        /*const index = this._getIndex(idSelected);
        if (index !== -1) {
           this._lista.splice(index, 1);   
           this._next();
        }*/
        return this._http.delete<Celebrity>(`${this._baseUrl}/celebrities/${idSelected}`);

    }

    create(celebrity: Celebrity): Observable<Celebrity> {
        /*celebrity.id=(this._lunghezzaLista+=1).toString();
        this._lista.push(celebrity);
        this._next();*/

        return this._http.post<Celebrity>(`${this._baseUrl}/celebrities`, celebrity);
    }

    private _getIndex(id: string): number {
        return this._lista.findIndex((celebrity: Celebrity) => celebrity.id === id);
    }

    private _next() {
        this._subjectC$.next(this._lista);
    }




}
