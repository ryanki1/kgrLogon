import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StartRoutingModule} from './start-routing.module';
import {AddressComponent} from '../address/address.component';
import {PostalComponent} from '../postal/postal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule} from '@angular/material';

@NgModule({
    declarations: [
        AddressComponent,
        PostalComponent,
    ],
    imports: [
        CommonModule,
        StartRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
    ],
})
export class StartModule {
}
