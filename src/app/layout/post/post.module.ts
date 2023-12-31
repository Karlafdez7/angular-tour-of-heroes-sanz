import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './list/detail/detail.component';
import { ViewPostComponent } from './list/detail/view-post/view-post.component';
import { EditPostComponent } from './list/detail/edit-post/edit-post.component';
import { PostDataSectionComponent } from './component/post-data-section/post-data-section.component';
import { EditDataSectionComponent } from './component/edit-data-section/edit-data-section.component';
import { SearchBarModule } from '../search-bar/search-bar.module';


@NgModule({
  declarations: [
    PostComponent,
    ListComponent,
    ViewPostComponent,
    EditPostComponent,
    PostDataSectionComponent,
    EditDataSectionComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    SearchBarModule,
  ]
})
export class PostModule { }
