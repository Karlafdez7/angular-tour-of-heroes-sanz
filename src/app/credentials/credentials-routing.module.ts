import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './credentials.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', 
component: CredentialsComponent,
children: [  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'new-profile',
    component: NewProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ]  
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialsRoutingModule { }
