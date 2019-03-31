import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginStore} from './login.store';
import {createLogin, LoginState} from './login.model';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginService {

    constructor(private loginStore: LoginStore,
                private http: HttpClient,
                private router: Router) {
    }

    login(credentials: any) {
        this.http.post('http://localhost:4200/api/auth', credentials).subscribe(
            (authLogin: LoginState) => {
                if (authLogin && !!authLogin.token) {
                    this.loginStore.update(authLogin);
                }
            }
        );
    }
    logout() {
        this.loginStore.update(createLogin());
    }
}
