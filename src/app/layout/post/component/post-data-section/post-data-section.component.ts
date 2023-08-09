import { Component,Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-post-data-section',
  templateUrl: './post-data-section.component.html',
  styleUrls: ['./post-data-section.component.sass']
})
export class PostDataSectionComponent implements OnInit {
  // @Input() postDetails!:listModel

  // itemDetails!: listModel;
  currentItem: listModel | null = null;

  constructor(private listService: ListService){}

  ngOnInit(){
    this.listService.getItem().subscribe((item) => {
      this.currentItem = item
    })
    // this.itemDetails = this.listService.itemSubject;
    // console.log('3', this.itemDetails)
  }
}
