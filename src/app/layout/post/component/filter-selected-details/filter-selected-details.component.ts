import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-filter-selected-details',
  templateUrl: './filter-selected-details.component.html',
  styleUrls: ['./filter-selected-details.component.sass']
})
export class FilterSelectedDetailsComponent implements OnInit {
  
  @Output() sendPost = new EventEmitter<string>()
  listApi: listModel[]=[];
  postControl = new FormControl('');
  filteredPost!: string[];
  filterValue!: string;
  isLoading: boolean= false;

  ngOnInit() {

    const storedData = localStorage.getItem('listData');
    if (storedData) {
      this.listApi = JSON.parse(storedData);
    }
    this.postControl.valueChanges.subscribe(filterValue => {      
      this.isLoading=true;
      setTimeout(() => {
        this.filteredPost= this._filter(filterValue || '')
      }, 3000)
      })

    }
    
  private _filter(value: string): string[] {
    this.filterValue = value.toLowerCase();
    const titleListApi = this.listApi.map(item => item.title)
    this.isLoading=false;
    return titleListApi.filter(option => option.toLowerCase().includes(this.filterValue));
  
}

  selectPost(post: string){
    this.sendPost.emit(post)
  }
}
