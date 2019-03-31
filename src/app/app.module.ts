import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StartComponent} from './start/start.component';
import {LayoutComponent} from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {UsernameValidatorDirective} from './login/validator/username-validator';

// import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
// import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
// import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        StartComponent,
        LoginComponent,
        UsernameValidatorDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatProgressSpinnerModule
        // environment.production ?
        //     [] :
        //     [ AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot() ]
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
