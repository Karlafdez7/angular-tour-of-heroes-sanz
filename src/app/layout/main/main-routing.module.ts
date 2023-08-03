import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component'
import { ChangePasswordComponent } from './change-password/change-password.component'
import { EditProfileComponent } from './edit-profile/edit-profile.component'

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      { path: 'profile', component: ProfileComponent },
    ] 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
