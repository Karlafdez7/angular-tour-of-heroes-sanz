import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
})
export class MainModule { }
