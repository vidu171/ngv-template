import { NgModule } from '@angular/core';

import { GCComponent } from './gc/gc.component';
import { CobeComponent } from './cobe/cobe.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
    imports: [
      CoreRoutingModule
    ],
    declarations: [
        GCComponent,
        CobeComponent,
        StatusComponent,
        ProfileComponent,
    ]
})
export class CoreModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/