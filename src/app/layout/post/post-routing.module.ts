import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { DetailComponent } from './list/detail/detail.component';
import { ViewPostComponent } from './list/detail/view-post/view-post.component';
import { EditPostComponent } from './list/detail/edit-post/edit-post.component';
import { SelectedDetailsComponent } from './list/selected-details/selected-details.component';

const routes: Routes = [{ path: '', component: PostComponent, children: [
    {
      path: 'selected', component: SelectedDetailsComponent 
    },
    { path: 'details/:id', component: DetailComponent, children: [
        { path: '', redirectTo: 'view', pathMatch: 'full' },
        { path: 'view', component: ViewPostComponent},
        { path: 'edit', component: EditPostComponent }
      ]
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
