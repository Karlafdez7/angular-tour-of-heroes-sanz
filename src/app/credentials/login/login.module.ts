import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NewProfileComponent } from '../new-profile/new-profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    NewProfileComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    
    
  ]
})
export class LoginModule { }
