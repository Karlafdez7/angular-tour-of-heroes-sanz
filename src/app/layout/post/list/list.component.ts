import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import listModel from 'src/app/listModel';
import { ListService } from '../../../list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent  implements OnInit{
  
  @Input() searchInput!: string;
  @Input() filterItem!: listModel[]
  listApi: listModel[] = [];
  displayedColumns: string[] = ['selectAll','id', 'title'];
  dataSource: listModel[] = this.listApi;
  

  @Output() selectedRowsChanged = new EventEmitter<listModel[]>();

  selectedRows: listModel[] = [];
  allSelected: boolean = false;
  results: string[] = []
  
  constructor(private listService: ListService, private route: ActivatedRoute, private router : Router){

  };
  
  ngOnInit() {
    // this.listService.getPost().subscribe((list:listModel[]) => {
    //   this.listApi = list;
    //   this.dataSource = list;
    // });
    
    
    this.loadListData();
    
  }

  loadListData() {
    this.listService.getListData().subscribe({
      next: (data: listModel[]) => {
        this.listApi = data;
        this.dataSource = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      }
  });
  }

  onSelect(id: number): void {
    if (id !== undefined && id !== null) {
      this.router.navigate(['layout/post/details', id]);
    } else {
      console.error('Item ID is undefined or null.');
    }
  }

  toggleSelection(element: listModel) {
    
    const index = this.selectedRows.indexOf(element);
    if (index === -1) {
      this.selectedRows.push(element);

    } else {
      this.selectedRows.splice(index, 1);
    }

    this.updateAllSelectedStatus();
    this.selectedRowsChanged.emit(this.selectedRows);
  }

  toggleAllSelection() {
    if (this.allSelected) {
      this.selectedRows = [];
    } else {
      this.selectedRows = this.dataSource.slice();
    }
    this.allSelected = !this.allSelected;
    this.selectedRowsChanged.emit(this.selectedRows);
  }

  updateAllSelectedStatus() {
    this.allSelected = this.selectedRows.length === this.dataSource.length;
  }

  isSelected(element: listModel): boolean {
    return this.selectedRows.indexOf(element) !== -1;
  }

  // applyFilter(value: string) {
  //   value = value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios en blanco
  //   this.dataSource = this.listApi.filter(item => item.title.toLowerCase().includes(value));
  // }  

  applyFilter(value: string){
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
          this.dataSource = filterSelectedItem;
        } else{
          this.dataSource= [];
        }
    }
  }

}
