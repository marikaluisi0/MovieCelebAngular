import { Injectable } from "@angular/core";
import { films } from "../movie/movie.interfaces/movie.interface";


@Injectable({
    providedIn: 'root'
})

export class MoviesService {

    lista: films[] =

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





    getMovies(): films[] {
        return this.lista;
    }

    getMovieById(id: string | null): films {
        const movie: films | undefined = this.lista.find(lista => lista.id === id);
        if (movie) {
            return movie;
        } else {
            return {
                id: "0",
                title: "",
                startYear: 0,
                genres: "",
                runtimeMinutes: 0
            }
        }
    }

    update(filmSelected: films): void {
        const index = this.lista.findIndex((film: films) => film.id === filmSelected.id);
        if (index !== -1) {
            this.lista[index] = filmSelected;
        }
    }




}
