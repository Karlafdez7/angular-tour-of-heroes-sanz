import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CredentialsRoutingModule } from './credentials-routing.module';
import { CredentialsComponent } from './credentials.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { NewProfileComponent } from './new-profile/new-profile.component';


@NgModule({
  declarations: [
    CredentialsComponent,
    LoginComponent,
    NewProfileComponent,
  ],
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ],


})
export class CredentialsModule { }
