import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './detail.component';
import { ViewPostComponent } from '../../component/view-post/view-post.component';
import { EditPostComponent } from '../../component/edit-post/edit-post.component';


const routes: Routes = [{ path: '', component: DetailComponent,
  children: [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: ViewPostComponent},
    { path: 'edit', component: EditPostComponent },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
