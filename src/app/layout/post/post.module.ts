import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './list/detail/detail.component';
import { ViewPostComponent } from './list/detail/view-post/view-post.component';
import { EditPostComponent } from './list/detail/edit-post/edit-post.component';
import { PostDataSectionComponent } from './component/post-data-section/post-data-section.component';
import { EditDataSectionComponent } from './component/edit-data-section/edit-data-section.component';
import { LandingPostComponent } from './landing-post/landing-post.component';


@NgModule({
  declarations: [
    PostComponent,
    ListComponent,
    ViewPostComponent,
    EditPostComponent,
    PostDataSectionComponent,
    EditDataSectionComponent,
    DetailComponent,
    LandingPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class PostModule { }
