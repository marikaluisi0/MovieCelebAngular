import { Cast } from "src/app/movie/movie.interfaces/movie.interface";

export interface ListItems  {
    id:string;
    text:string;
    rating?:number;
    attori?:Cast[];
    year?:number;
}

