import { Component, Input, OnInit, Output } from '@angular/core';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-selected-details',
  templateUrl: './selected-details.component.html',
  styleUrls: ['./selected-details.component.sass']
})
export class SelectedDetailsComponent implements OnInit{

  selectedRows: listModel[] = [];
  deleteRow!: string;
  idRow!: string;
  eventData!: string;
  renderSelectedRows: listModel[]=[];
  
  constructor(private listService: ListService){}

  ngOnInit(){

      const state= window.history.state;
      if (state && state.selectedRows){
        this.selectedRows= state.selectedRows;
        this.renderSelectedRows = state.selectedRows; 

      };
      
  }

  onDeleteRow(id: string){
    const idNumber = parseInt(id)
    this.listService.deleteById(idNumber).subscribe(() => {
      this.renderSelectedRows = this.renderSelectedRows.filter(row => row.id !== idNumber);
      this.idRow = ''
    })
  }

  filterSelectedRows(filterValue: string) {
    if (filterValue) {
      // Filtrar los detalles seleccionados basados en el valor del filtro
      const filterSelectedRows = this.selectedRows.filter(row =>
        row.title.toLowerCase().includes(filterValue.toLowerCase())
      );
        if(filterSelectedRows.length > 0 ){
          this.renderSelectedRows = filterSelectedRows;
        } else{
          this.renderSelectedRows= [];
        }
    }
  }

  handleEvent(eventData: string){
    this.filterSelectedRows(eventData);
  }
}




