import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class Guardian implements CanActivate {
    constructor(
    ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {

        const id = route.params['id'];
        

        if (id =="tt0036177") {
            return true;

        } else
            return false;
    }
}

