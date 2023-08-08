import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { DetailComponent } from './list/detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{ path: '', component: PostComponent,children: [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'details/:id', component: DetailComponent},
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
