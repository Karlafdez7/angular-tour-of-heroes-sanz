import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { DetailComponent } from './list/detail/detail.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { PostDataSectionComponent } from './component/post-data-section/post-data-section.component';

@NgModule({
  declarations: [
    PostComponent,
    DetailComponent,
    ListComponent,
    PostDataSectionComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule
  ]
})
export class PostModule { }
