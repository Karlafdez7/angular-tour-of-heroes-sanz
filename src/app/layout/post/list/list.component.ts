import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import listModel from 'src/app/listModel';
import { ListService } from '../../../list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent  implements OnInit{

  listApi: listModel[] = [];
  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource: listModel[] = [];
  item!: listModel;
  selectedItem!:listModel;
  

  constructor(private listService: ListService, private route: ActivatedRoute){

  };
  
  ngOnInit() {
    this.listService.getPost().subscribe((list:listModel[]) => {
      this.listApi = list;
      this.dataSource = list;
      console.log('Este de aquí',this.listApi);
    }); 
  
  }


  // onSelect (item:listModel):void{
  //   this.selectedItem = item;
  //   console.log(item);
  // }

  // getItemId(){
    
  // //  this.listService.getItemId('listApiId').subscribe((list:listModel[]) => {
  // //     this.listApi = list;
  // //     this.dataSource = list;
  // //     console.log('Este de aquí',this.listApi);
  // //   });  
  // }
}
