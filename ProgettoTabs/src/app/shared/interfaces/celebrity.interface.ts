
export interface Celebrity {
    id: string;
    name: string;
    birthYear: number;
    deathYear?: number;
    movies?: Movies[];
}

export interface Movies {
    celebrityId: string,
    celebrityName: string,
    movieTitle?: string,
    movieId: string,
    category?: Category;

}

export enum Category {
    Writer,
    Actor,
    Director
}
