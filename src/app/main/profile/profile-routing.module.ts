import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component'
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
const routes: Routes = [
  { 
    path: '', 
    component: ProfileComponent,
  },
  {
    path: 'edit-profile', component: EditProfileComponent
  },
  {
    path: 'change-password', component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
