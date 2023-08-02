import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NewProfileComponent } from '../new-profile/new-profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'new-profile', component: NewProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
