import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JitEvaluator } from '@angular/compiler';
import { AuthGuard } from './auth-guard.guard';
// import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'credentials', pathMatch: 'full'},
  { path: 'credentials', loadChildren: () => import('./credentials/credentials.module').then(m => m.CredentialsModule) },
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate:[AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


