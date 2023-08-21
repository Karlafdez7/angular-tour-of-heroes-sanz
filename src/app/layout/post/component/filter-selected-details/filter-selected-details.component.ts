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
  
  @Input() selectedRows: listModel[]=[]
  // @Output() sendPost = new EventEmitter()
  
  postControl = new FormControl('');
  filteredPost!: string[];
  filterValue!: string;


  constructor(private listService: ListService){}
  ngOnInit() {
    // this.filteredPost = this.postControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),

    // );

    this.postControl.valueChanges.subscribe(filterValue => {
      this.filteredPost= this._filter(filterValue || '')
    })
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
    this.listService.onSendFilterValue(post); 


    // if(post){
    //   this.sendPost.emit(post)
    // } else {
    //   this.sendPost.emit(null)
    // }
    // console.log('selectedPost', post)
    // this.sendPost.emit(post)
  }
}
