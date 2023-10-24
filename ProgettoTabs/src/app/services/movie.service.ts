import { Injectable } from "@angular/core";
import { films } from "../movie/movie.interfaces/movie.interface";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class MoviesService {
   private _subjectM$ = new Subject<films[]>();
   filmsObs$ = this._subjectM$.asObservable();
   //ma con un obs non posso usare il next, unica cosa che posso fare, quindi
   //è la lettura


    private _lista: films[] =



        [
            {
                title: "La vita è bella",
                genres: "drammatico",
                id: "film1",
                startYear: 1997,
                runtimeMinutes: 200
            },

            {
                title: "Alla ricerca della felicità",
                genres: "drammatico",
                id: "film2",
                startYear: 2001,
                runtimeMinutes: 167
            },

            {
                title: "Aladdin",
                genres: "Cartone animato",
                id: "film3",
                startYear: 1999,
                runtimeMinutes: 120
            }
        ]


    getMovies(): void {
        return this._subjectM$.next(this._lista); //ok
    }
//next=invia un dato
//subscribe=lo riceve
    getMovieById(id: string): films|undefined {
      return this._lista.find((_lista:films)=>_lista.id===id);
    }

    update(filmSelected: films) {
        const index = this._lista.findIndex((film: films) => film.id === filmSelected.id);
        if (index !== -1) {
            this._lista[index] = filmSelected;
        }
        this._subjectM$.next(this._lista);
    }

    delete(idSelected : string){
        const index = this._lista.findIndex((film: films) => film.id === idSelected);
        if (index !== -1) {
           this._lista.splice(index, 1);   
           this._subjectM$.next(this._lista); //serve per l'agg
        }
        }

        create(film: films){
            
            this._lista.push(film);
            this._subjectM$.next(this._lista);
        }
    }




