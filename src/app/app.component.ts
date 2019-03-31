import {Component, NgZone, OnInit, Sanitizer} from '@angular/core';
import {createPostal} from './postal/state/postal.model';
import {PostalService} from './postal/state/postal.service';
import {PostalQuery} from './postal/state/postal.query';
import {akitaDevtools, getValue} from '@datorama/akita';
import {PostalStore} from './postal/state/postal.store';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {EMPTY, from, fromEvent, interval, merge, Observable, of, onErrorResumeNext, timer} from 'rxjs';
import {catchError, filter, map, mapTo, mergeAll, mergeMap, scan, startWith, switchMap, switchMapTo, take, takeWhile} from 'rxjs/operators';
import {isNumber} from 'util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private countdown = 10;
    public remainingSeconds: number = this.countdown;
    constructor(
        private postalStore: PostalStore,
        private postalQuery: PostalQuery,
        private postalService: PostalService,
        private ngZone: NgZone,
        private matIconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
    ) {
        this.matIconRegistry.addSvgIcon('exit-to-app',
        this.sanitizer.bypassSecurityTrustResourceUrl('./reactiveApp/assets/baseline-exit_to_app-24px.svg'));
    }

    ngOnInit(): void {
        const pauseButton: HTMLElement = document.getElementById('pause');
        const resumeButton: HTMLElement = document.getElementById('resume');
        const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(EMPTY));
        const interval$ = interval(1000).pipe(mapTo(-1));
        const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(interval$));
        const source = merge(pause$, resume$);
        const errSource = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('You sunk my battleship..');
            }
            , 2000);
        });
        // source
        //     .pipe(
        //         startWith(true),
        //         switchMap( projectFn),
        //         scan(accumulatorFn, this.countdown),
        //         take(this.countdown)
        //     )
        //     .subscribe((remainingSeconds) => {
        //         this.remainingSeconds = remainingSeconds;
        //     });
        // source
        //         //     .pipe(
        //         //         startWith(-1),
        //         //         mapTo(-1),
        //         //         scan((acc: number, val: number, ind: number) => {
        //         //                 if (isNumber(val)) {
        //         //                     return (acc + val);
        //         //                 }
        //         //             },
        //         //             this.countdown
        //         //         ),
        //         //         take(this.countdown)
        //         //     )
        //         //     .subscribe((remainingSeconds) => {
        //         //         this.remainingSeconds = remainingSeconds;
        //         //     });
        timer(1000)
            .pipe(
                mergeMap(x => {
                    try {
                        return of(errSource);
                    } catch (e) {
                        throw new Error((e as Error).message);
                    }
                })
            )
            .subscribe((x) => {
                console.log(x);
            }, (errMessage: string) => {
                console.log(errMessage);
            });

        akitaDevtools(this.ngZone);
        // this.postalStore.setHasCache(true); // todo: remove if not required
        of(1, 2,  3, 4, 5 )
            .pipe(take(1))
            .subscribe(num => {
               console.log(`Take(1) => ${num}`);
            });

    }
}
