import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-selected-details',
  templateUrl: './selected-details.component.html',
  styleUrls: ['./selected-details.component.sass']
})
export class SelectedDetailsComponent implements OnInit{

  @Output() selectedRows: listModel[] = [];
  // filterValue: Subscription;
  deleteRow!: string;
  idRow!: string;
  datoRecibido = this.listService.actualFilterValue;

  constructor(private listService: ListService){
    
  }

  ngOnInit(){
      const state= window.history.state;
      if (state && state.selectedRows){
        this.selectedRows= state.selectedRows
      };

      this.listService.actualFilterValue.subscribe(filterValue => {
        this.filterSelectedRows(filterValue); // Filtrar los detalles seleccionados
      });
    
      
  }

    

  onDeleteRow(id: string){
    const idNumber = parseInt(id)
    this.listService.deleteById(idNumber).subscribe(() => {
      this.selectedRows = this.selectedRows.filter(row => row.id !== idNumber);
      this.idRow = ''
    })
  }

  filterSelectedRows(filterValue: string) {
    if (filterValue) {
      // Filtrar los detalles seleccionados basados en el valor del filtro
      this.selectedRows = this.selectedRows.filter(row =>
        row.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
  }
}




