import { Component, Input } from '@angular/core';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-selected-details',
  templateUrl: './selected-details.component.html',
  styleUrls: ['./selected-details.component.sass']
})
export class SelectedDetailsComponent {
  selectedRows: listModel[] = []

  saveSelectedRows(list: listModel[]){
    this.selectedRows = list
    console.log('list details', list)
  }
}
