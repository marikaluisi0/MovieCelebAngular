import { Injectable } from "@angular/core";
import { films } from "../movie/movie.interfaces/movie.interface";


@Injectable({
    providedIn: 'root'
})

export class MoviesService{

    getMovies(): films[]{
        return[
            {title:"La vita è bella",
            genres: "drammatico",
            id: "film1",
            startYear: 1997,
            runtimeMinutes: 200},

            {title:"Alla ricerca della felicità",
            genres: "drammatico",
            id: "film2",
            startYear: 2001,
            runtimeMinutes: 167},

            {title:"Aladdin",
            genres: "Cartone animato",
            id: "film3",
            startYear: 1999,
            runtimeMinutes: 120}
        ]
    }


   //getMovieById(id: string): films | undefined{
    //const movie= this.getMovies.find(movie: films)
//}
      // return this.films.filter(film: films)=> film.getMovieById===id;
   // }

}