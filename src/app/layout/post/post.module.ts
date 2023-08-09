import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
// import { ViewPostComponent } from './component/view-post/view-post.component';
// import { EditPostComponent } from './component/edit-post/edit-post.component';

@NgModule({
  declarations: [
    PostComponent,
    ListComponent,
    // ViewPostComponent,
    // EditPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
  ]
})
export class PostModule { }
