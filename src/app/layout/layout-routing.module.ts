import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AuthGuard } from '../auth-guard.guard'
import { SelectedDetailsComponent } from './post/list/selected-details/selected-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';


const routes: Routes = [
  { path: '', 
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent},
    { path:'dashboard', component: DashboardComponent},
    { path: 'details/:id', component: HeroDetailComponent},
    { path:'selectedDetails', component:SelectedDetailsComponent},
    {path: 'vehicle', component: VehicleComponent},
    { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
    { path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule) }
  ]
  },
  
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
