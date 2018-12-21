import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar.component';
import { CoreComponent } from './Dashboard/core.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MatCardModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { MatButtonModule } from '@angular/material';
import { from } from 'rxjs';
import { SpeedDialFabComponent } from './Dashboard/speed-dial-fab/speed-dial-fab.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    CoreComponent,
    LoginComponent,
    SpeedDialFabComponent,
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
