import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './Dashboard/core.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
 

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: CoreComponent,

  },
  {
    path: '',
    component: CoreComponent,
    loadChildren: './Dashboard/core.module#CoreModule'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
