import { Component, OnInit } from '@angular/core';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-selected-details',
  templateUrl: './selected-details.component.html',
  styleUrls: ['./selected-details.component.sass']
})
export class SelectedDetailsComponent implements OnInit{

  selectedRows: listModel[] = [];
  deleteRow!: string;

  ngOnInit(){
    const state= window.history.state;
    if (state && state.selectedRows){
      this.selectedRows= state.selectedRows
    }
  }

  // onDelete(){
  //   console.log(this.deleteRow)
  // }
}



