import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {createLogin, LoginState} from './login.model';

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'login'})
export class LoginStore extends Store<LoginState> {

    constructor() {
        super(createLogin());
    }

}

