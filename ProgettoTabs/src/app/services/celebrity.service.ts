import { Injectable } from "@angular/core";
import { celebrity } from "../shared/interfaces/celebrity.interface";


@Injectable({
    providedIn: 'root'
})

export class CelebritiesService {

    lista: celebrity[] =

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





    getCelebrities(): celebrity[] {
        return this.lista;
    }

    getCelebrityById(id: string | null): celebrity {
        const celeb: celebrity | undefined = this.lista.find(lista => lista.id === id);
        if (celeb) {
            return celeb;
        } else {
            return {
                id: "0",
                primary_name: "",
                birthYear: 0,
            }
        }
    }

    update(selectedCel: celebrity): void {
        const index = this.lista.findIndex((cel: celebrity) => cel.id === selectedCel.id);
        if (index !== -1) {
            this.lista[index] = selectedCel;
        }
    }




}
