import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{ path: '', component: PostComponent,children: [
  { path: 'details/:id', loadChildren: () => import('./list/detail/detail.module').then(m => m.DetailModule)},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
