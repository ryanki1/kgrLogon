import {Injectable} from '@angular/core';
import {Query, QueryEntity} from '@datorama/akita';
import {LoginStore} from './login.store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginState} from './login.model';

@Injectable({
    providedIn: 'root'
})
export class LoginQuery extends Query<LoginState> {

    private $login: Observable<LoginState>;

    constructor(protected store: LoginStore) {
        super(store);
        this.$login = this.select()
            .pipe(
                map(() => this.getValue())
            );
    }

    $isLoggedIn(): Observable<LoginState> {
        return this.$login;
    }

}
