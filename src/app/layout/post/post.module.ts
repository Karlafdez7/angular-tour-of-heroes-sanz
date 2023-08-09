import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    PostComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
  ]
})
export class PostModule { }
