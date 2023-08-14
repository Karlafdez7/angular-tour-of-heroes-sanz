import { Component, ViewChild} from '@angular/core';
import { SearchComponent } from './component/search/search.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  @ViewChild(SearchComponent) searchComponent!: SearchComponent;
  @ViewChild(ListComponent) listComponent!: ListComponent;


  
  onSearchValueChange(value: string) {
    this.listComponent.applyFilter(value);
  }


}
