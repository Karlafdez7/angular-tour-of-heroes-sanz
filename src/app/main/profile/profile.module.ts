import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
  
    ChangePasswordComponent,
       EditProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
})
export class ProfileModule { }
