import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostalComponent} from '../postal/postal.component';
import {AddressComponent} from '../address/address.component';

const routes: Routes = [
    {
        path: 'postal',
        component: PostalComponent,
    },
    {
        path: 'address',
        component: AddressComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StartRoutingModule {
}
