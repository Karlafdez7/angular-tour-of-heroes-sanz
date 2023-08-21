import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
<<<<<<< HEAD
=======
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
>>>>>>> bd7f00035b1d309ca5fed46e71e4d2b8d8251e12

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './list/detail/detail.component';
import { ViewPostComponent } from './list/detail/view-post/view-post.component';
import { EditPostComponent } from './list/detail/edit-post/edit-post.component';
import { PostDataSectionComponent } from './component/post-data-section/post-data-section.component';
import { EditDataSectionComponent } from './component/edit-data-section/edit-data-section.component';
import { SearchComponent } from './component/search/search.component';


@NgModule({
  declarations: [
    PostComponent,
    ListComponent,
    ViewPostComponent,
    EditPostComponent,
    PostDataSectionComponent,
    EditDataSectionComponent,
    DetailComponent,
    SearchComponent,

  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
<<<<<<< HEAD

=======
    MatRadioModule,
    MatIconModule
>>>>>>> bd7f00035b1d309ca5fed46e71e4d2b8d8251e12
  ]
})
export class PostModule { }
