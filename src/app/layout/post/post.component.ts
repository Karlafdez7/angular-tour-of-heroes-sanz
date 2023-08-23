import { Component, Input, ViewChild} from '@angular/core';
import { ListComponent } from './list/list.component';
import listModel from 'src/app/listModel';
import { SelectedDetailsComponent } from './list/selected-details/selected-details.component';
import {  Router, NavigationExtras } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  @ViewChild(ListComponent) listComponent!: ListComponent;
  @ViewChild(SelectedDetailsComponent) selectedDetailsComponent!: SelectedDetailsComponent;
  @ViewChild('searchBar', { static: true }) searchBar!: SearchBarComponent;
  
  selectedRows: listModel[] = [];
  results: string[] = []
  filterItem: listModel[] = [];
  @Input() listApi: listModel[]=[];

  constructor( private router : Router){
  }
  
  // onSearchValueChange(value: string) {
  //   this.listComponent.applyFilter(value);
  // }

  onSelectedRowsChange(rows: listModel[]){
    this.selectedRows = rows;
  }

  sendSelectedRows(){
    const navigateExtras: NavigationExtras = {
      state:{
        selectedRows: this.selectedRows
      }
    };
    this.router.navigate(['layout/selectedDetails'], navigateExtras)
  }
  
  handleSearch(value: string | '') {
    this.listComponent.applyFilter(value)
    this.results = this.listComponent.results
        
  }



handleEvent(item: any){
  this.listComponent.filterSelectedItem(item);
}

}
