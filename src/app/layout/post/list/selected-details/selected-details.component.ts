import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-selected-details',
  templateUrl: './selected-details.component.html',
  styleUrls: ['./selected-details.component.sass']
})
export class SelectedDetailsComponent implements OnInit{

  @Output() selectedRows: listModel[] = [];
  filterValue!: string;
  deleteRow!: string;

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

  // onDelete(){
  //   console.log(this.deleteRow)
  // }




