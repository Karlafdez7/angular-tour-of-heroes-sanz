import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './detail.component';
import { PostDataSectionComponent } from '../../component/post-data-section/post-data-section.component';
import { EditDataSectionComponent } from '../../component/edit-data-section/edit-data-section.component';


const routes: Routes = [{ path: '', component: DetailComponent,children: [
  { path: 'view', component: PostDataSectionComponent},
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'edit', component: EditDataSectionComponent },
  
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
