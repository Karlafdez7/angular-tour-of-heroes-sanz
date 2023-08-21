import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
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
  @Input() selectedRows: listModel[]=[]
  filteredPost!: Observable<string[]>;
  filterValue!: string;
  @Output()  sendPost = new EventEmitter()


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

    return titleSelectedRows.filter(option => option.toLowerCase().includes(this.filterValue));
    
  }

  // onSendFilterValue(value:string){
  //  this.listService.onSendFilterValue(value); 
  // }

  selectPost(post: string){
    // this.listService.onSendFilterValue(post); 
    // console.log('selectedPost', post)
    this.sendPost.emit(post)
  }
}
