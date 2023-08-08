import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { PostDataSectionComponent } from '../../component/post-data-section/post-data-section.component';
import { EditDataSectionComponent } from '../../component/edit-data-section/edit-data-section.component';


@NgModule({
  declarations: [
    DetailComponent,
    PostDataSectionComponent,
    EditDataSectionComponent,

  ],
  imports: [
    CommonModule,
    DetailRoutingModule,

  ]
})
export class DetailModule { }
