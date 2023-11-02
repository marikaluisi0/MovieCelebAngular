import { Injectable } from "@angular/core";
import { FilmsForm, Film, ResponseDto } from "../movie/movie.interfaces/movie.interface";
import { Observable, Subject, map, pluck } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    private _subjectM$ = new Subject<Film[]>();
    filmsObs$ = this._subjectM$.asObservable();
    //ma con un obs non posso usare il next, unica cosa che posso fare, quindi
    //è la lettura
    //con l'obs nessuna la legge, quindi uso l'osservatore x legg

    //next=invia un dato
    //subscribe=lo riceve

    private _baseUrl = '';

    private _lista: Film[] = [];

    constructor(private readonly _http: HttpClient) {
        this._baseUrl = environment.baseUrl;  //recupero l'URL

    }

    private _lunghezzaLista = this._lista.length;


   
    getId(films: Film):string{
        return films.id; 
    }
    

    getMovies(): Observable<Film[]> {
        return this._http.get<ResponseDto<Film>>(`${this._baseUrl}/movies?order_by=id&page=0&size=20`).pipe(map((result) => {
            this._subjectM$.next(result.movies);
            return result.movies;
        }));
    }
    
    getMoviesByTitle(title:string) :Observable<Film[]>
    {
        return this._http.get<ResponseDto<Film>>(`${this._baseUrl}/movies?title=${title}`).pipe(map((result) => {
            this._subjectM$.next(result.movies);
            return result.movies;
        }));
    }

    

    getMovieById(id: string): Observable<Film> {
        return this._http.get<Film>(`${this._baseUrl}/movies/${id}`);
    }

    update(filmSelected: Film): Observable<Film> {

        //const index = this._getIndex(filmSelected.id);
        /*if (index !== -1) {
            this._lista[index] = filmSelected;
        }
        this._next();*/

        return this._http.put<Film>(`${this._baseUrl}/movies/${filmSelected.id}`,filmSelected);
        }

    

    delete(idSelected: string) : Observable<Film> {
        /*const index = this._getIndex(idSelected);
        if (index !== -1) {
            this._lista.splice(index, 1);
            this._next();
        }*/
        return this._http.delete<Film>(`${this._baseUrl}/movies/${idSelected}`);
    }

    create(film: FilmsForm): Observable<Film>{
        const movieDto:Film=this.formToDto(film);
        return this._http.post<Film>(`${this._baseUrl}/movies`,movieDto);
        /*
        film.id = (this._lunghezzaLista += 1).toString();
        this._lista.push(film);
        this._next(); */
    }
   

    private _getIndex(id: string): number {
        return this._lista.findIndex((film: Film) => film.id === id);
    }

    private _next() {
        this._subjectM$.next(this._lista); //serve per l'agg
    }


    formToDto(createdMovie: FilmsForm): Film{
        return{
                rating: {averageRating: createdMovie.averageRating, 
                        numVotes: createdMovie.numVotes},
                id: createdMovie.id,
                title: createdMovie.title,
                genres: createdMovie.genres,
                year: createdMovie.year,
                runningTime: createdMovie.runningTime
        }
    }
}


   







