import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { PostDataSectionComponent } from '../../component/post-data-section/post-data-section.component';
import { EditDataSectionComponent } from '../../component/edit-data-section/edit-data-section.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    PostDataSectionComponent,
    EditDataSectionComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MatFormFieldModule
  ]
})
export class DetailModule { }
