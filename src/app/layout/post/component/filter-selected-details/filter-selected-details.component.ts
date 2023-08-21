import { Component,Input,OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import listModel from 'src/app/listModel';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-filter-selected-details',
  templateUrl: './filter-selected-details.component.html',
  styleUrls: ['./filter-selected-details.component.sass']
})
export class FilterSelectedDetailsComponent implements OnInit {
  postControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  @Input() selectedRows: listModel[]=[]
  @Output()filteredPost!: Observable<string[]>;
  @Output() filterValue!: string;

  constructor(private listService: ListService){}
  ngOnInit() {
    this.filteredPost = this.postControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),

    );

  }
  
  private _filter(value: string): string[] {
    this.filterValue = value.toLowerCase();
    const titleSelectedRows = this.selectedRows.map(item => item.title)
    console.log('hehehe',this.filterValue);
    console.log('esto es el filteredPost',this.filteredPost)

    return titleSelectedRows.filter(option => option.toLowerCase().includes(this.filterValue));
    
  }

  onSendFilterValue(value:string){
   this.listService.onSendFilterValue(value); 
  }
}
