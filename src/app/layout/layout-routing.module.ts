import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', 
  component: LayoutComponent,
  children: [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent},
    { path:'dashboard', component: DashboardComponent},
    { path: 'details/:id', component: HeroDetailComponent},
    { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  ]
  }
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
