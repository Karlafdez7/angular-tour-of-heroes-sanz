import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-selected-details',
  templateUrl: './selected-details.component.html',
  styleUrls: ['./selected-details.component.sass']
})
export class SelectedDetailsComponent implements OnInit{

  selectedRows: listModel[] = [];
  idRow!: string;

  constructor(private listService: ListService){}

  ngOnInit(){
    const state= window.history.state;
    if (state && state.selectedRows){
      this.selectedRows= state.selectedRows
    }
  }

  onDeleteRow(id: string){
    const idNumber = parseInt(id)
    this.listService.deleteById(idNumber).subscribe(() => {
      this.selectedRows = this.selectedRows.filter(row => row.id !== idNumber);
      this.idRow = ''
    })
  }
}



