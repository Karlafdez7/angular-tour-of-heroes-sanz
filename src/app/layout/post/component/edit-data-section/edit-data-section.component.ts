import { Component } from '@angular/core';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';


@Component({
  selector: 'app-edit-data-section',
  templateUrl: './edit-data-section.component.html',
  styleUrls: ['./edit-data-section.component.sass']
})
export class EditDataSectionComponent {

  currentItem: listModel | null = null;

  constructor(private listService: ListService){
    
  }

  ngOnInit(){
    this.listService.getItem().subscribe((item) => {
      this.currentItem = item
    })
  }
}
