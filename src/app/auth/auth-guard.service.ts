import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthService) {}

    canActivate(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.isAuthenticated();
    }
}