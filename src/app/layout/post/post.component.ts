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
    
    const filterValue = value.toLowerCase();
    const titleListApi = this.listApi.map(item => item.title)
    // this.isLoading=false;
    if(value !== ''){
      this.results = titleListApi.filter(option => option.toLowerCase().includes(filterValue));
    } else {
      this.results = []
    }
    console.log('handleSearch', value, this.results, filterValue, titleListApi)
        
}

filterSelectedItem(item: any) {
  if (item) {
    // Filtrar los detalles seleccionados basados en el valor del filtro
    const filterSelectedItem = this.listApi.filter(row =>
      row.title.toLowerCase().includes(item.toLowerCase())
    );
      if(filterSelectedItem.length > 0 ){
        this.filterItem = filterSelectedItem;
      } else{
        this.filterItem= [];
      }
  }
}

handleEvent(item: any){
  this.filterSelectedItem(item);
}

}
