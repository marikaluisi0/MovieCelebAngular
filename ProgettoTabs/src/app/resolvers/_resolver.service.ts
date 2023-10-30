import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Celebrity } from "../shared/interfaces/celebrity.interface";
import { CelebritiesService } from "../services/celebrity.service";

@Injectable({ providedIn: 'root' })
/**
 * Resolver per restituire i dati di dettaglio di una celebrità
 * @param route ActivatedRouteSnapshot
 * @returns
 */
export class Resolver implements Resolve<Celebrity> {
    constructor(private service: CelebritiesService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Celebrity> {
        return this.service.getCelebrityById(route.params['id']);
    }
}

/* RESOLVER FUNZIONALE:
export const detailResolver implements ResolveFn<Celebrity|undefined> =(route)=>{
    ...
    per importare un service in una funzione: const service= inject(nome classe injectable)
}*/