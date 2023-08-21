<<<<<<< HEAD
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> bd7f00035b1d309ca5fed46e71e4d2b8d8251e12
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-selected-details',
  templateUrl: './selected-details.component.html',
  styleUrls: ['./selected-details.component.sass']
})
export class SelectedDetailsComponent implements OnInit{

<<<<<<< HEAD
  @Output() selectedRows: listModel[] = [];
  filterValue!: string;
  deleteRow!: string;
=======
  selectedRows: listModel[] = [];
  idRow!: string;

  constructor(private listService: ListService){}
>>>>>>> bd7f00035b1d309ca5fed46e71e4d2b8d8251e12

  constructor(private listService: ListService){}

  ngOnInit(){

    if(!this.filterValue || this.filterValue===''){
      const state= window.history.state;
      if (state && state.selectedRows){
        this.selectedRows= state.selectedRows
      };
    } else{
      this.filterValue= this.listService.filterValue;
      console.log('esto es el filteValue de Selected-details', this.filterValue)
    }
    }


  }

<<<<<<< HEAD
  // onDelete(){
  //   console.log(this.deleteRow)
  // }

=======
  onDeleteRow(id: string){
    const idNumber = parseInt(id)
    this.listService.deleteById(idNumber).subscribe(() => {
      this.selectedRows = this.selectedRows.filter(row => row.id !== idNumber);
      this.idRow = ''
    })
  }
}
>>>>>>> bd7f00035b1d309ca5fed46e71e4d2b8d8251e12



