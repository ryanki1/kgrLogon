import {AbstractControl, AsyncValidator, FormControl, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {Directive} from '@angular/core';
import {NG_DIRECTIVE_DEF} from '@angular/core/src/render3/fields';

@Directive({
    selector: '[appValidateUsername]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: UsernameValidatorDirective,
        multi: true
    }]
})
export class UsernameValidatorDirective {
    static validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise<ValidationErrors>((resolve) => {
            setTimeout(() => {
                    let ret: any;
                    if (control.value && (control.value.toString().toLowerCase() === 'herreng')) {
                        ret = {username: true};
                    }
                    resolve(ret);
                },
                3000);
        });
    }
}
