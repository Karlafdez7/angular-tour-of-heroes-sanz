import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent, 
    children: [
      {
        path: 'profile', component: ProfileComponent
      },

    ]
  },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
