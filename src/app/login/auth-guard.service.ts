import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginQuery} from './state/login.query';
import {LoginState} from './state/login.model';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    private authenticated = false;
    private $isLoggedIn: Observable<LoginState> = this.loginQuery.$isLoggedIn();

    constructor(private loginQuery: LoginQuery,
                private router: Router) {
        this.$isLoggedIn
            .subscribe((loginState: LoginState) => {
                this.authenticated = !!loginState.token;
            });
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot):
        Observable<boolean | UrlTree> |
        Promise<boolean | UrlTree> |
        boolean |
        UrlTree {
        let unguarded: boolean;
        if (this.authenticated) {
            unguarded = true;
        } else {
            unguarded = false;
            this.router.navigateByUrl('/login');
        }
        return unguarded;
    }

}
