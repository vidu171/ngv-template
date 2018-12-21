import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GCComponent } from './gc/gc.component'
import { CobeComponent } from './cobe/cobe.component'
import { ProfileComponent } from './profile/profile.component'
import { StatusComponent } from './status/status.component'

const routes: Routes = [
    {
        path: '',
        component: GCComponent
    },
    {
        path: 'gc',
        component: GCComponent
    },
    {
        path: 'cobe',
        component: CobeComponent
    },
    {
        path: 'status',
        component: StatusComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
