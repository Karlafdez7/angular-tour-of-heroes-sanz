import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { PostDataSectionComponent } from '../../component/post-data-section/post-data-section.component';
import { EditDataSectionComponent } from '../../component/edit-data-section/edit-data-section.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditPostComponent } from '../../component/edit-post/edit-post.component';
import { ViewPostComponent } from '../../component/view-post/view-post.component';
import { ListViewComponent } from '../../component/list-view/list-view.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    EditPostComponent,
    ViewPostComponent,
    PostDataSectionComponent,
    EditDataSectionComponent,
    DetailComponent,
    ListViewComponent
    
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class DetailModule { }
