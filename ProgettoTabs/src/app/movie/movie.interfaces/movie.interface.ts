export enum Category{//specificarlo con string (es: writer="writer") o number, dipendendo dal back-end
    Writer,
    Actor,
    Director
}

export interface films extends FilmBase{ //interface con maiuscolo
    genres: string;
    year: number;
    runningTime: number;
    cast?: Cast[];
    countries?: Countries[];
    rating: Rating; 
}

export interface FilmsForm extends FilmBase{
    genres: string,
    year: number;
    runningTime: number;
    averageRating:number,
    numVotes: number;
}

export interface Cast{
    celebrityId: string,
    celebrityName: string,
    movieTitle?:string,
    movieId: string,
    category?:Category;
}

export interface Rating{
    averageRating:number,
    numVotes: number;
}

export interface Countries{
    title: string;
    region: string;
    language: string;
}

export interface FilmBase{   //la possiamo poi estendere perchè sono proprietà sempre presenti
    id: string,
    title:string;
}

