import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './state/login.service';
import {Router} from '@angular/router';
import {LoginQuery} from './state/login.query';
import {LoginState} from './state/login.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UsernameValidatorDirective} from './validator/username-validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private formLogin: FormGroup = this.fb.group({
        username: ['', Validators.required, UsernameValidatorDirective.validate.bind(this)],
        password: ['', Validators.required],
    });
    private $loginState: Observable<LoginState> = this.loginQuery.$isLoggedIn();
    private credentials: {
        username: '',
        password: '',
    };
    private tmpName: string;

    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private loginQuery: LoginQuery,
                private router: Router) {
        this.formLogin.valueChanges
            .subscribe((loginFormData: {username: '', password: ''}) => {
                this.credentials = loginFormData;
            });
        this.formLogin.valueChanges
            .pipe(
                map((credentials: {username: '', password: ''}) => credentials.username)
            )
            .subscribe((username: string) => {
                if (username === 'Herreng') {
                    setTimeout(() => {
                        alert('Herreng Bingo!');
                    },
                    0);
                }
            });
    }

    ngOnInit() {
        this.$loginState
            .subscribe(
                (loginState: LoginState) => {
                    if (!!loginState.token) {
                        this.router.navigateByUrl('/start');
                    } else {
                        this.router.navigateByUrl('/login');
                    }
                }
        );
    }

    onSubmit(e: Event, formLogin: FormGroup) {
        e.stopPropagation();
        e.preventDefault();
        this.loginService.login(this.credentials);
    }

    get username(): AbstractControl {
        return this.formLogin.get('username');
    }
}
