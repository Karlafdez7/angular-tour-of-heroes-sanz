import { Component, Input, ViewChild} from '@angular/core';
import { SearchComponent } from './component/search/search.component';
import { ListComponent } from './list/list.component';
import listModel from 'src/app/listModel';
import { SelectedDetailsComponent } from './list/selected-details/selected-details.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  //@ViewChild(SearchComponent) searchComponent!: SearchComponent;
  @ViewChild(ListComponent) listComponent!: ListComponent;
  @ViewChild(SelectedDetailsComponent) selectedDetailsComponent!: SelectedDetailsComponent;
  selectedRows: listModel[] = []

  
  onSearchValueChange(value: string) {
    this.listComponent.applyFilter(value);
  }

  onSelectedRowsChange(rows: listModel[]){
    this.selectedRows = rows;
  }


}
