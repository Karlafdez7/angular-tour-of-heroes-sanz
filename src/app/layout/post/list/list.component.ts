import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
 
  constructor(private listService: ListService, private route: ActivatedRoute, private router : Router){

  };
  
  ngOnInit() {
    this.listService.getPost().subscribe((list:listModel[]) => {
      this.listApi = list;
      this.dataSource = list;
    }); 
  
  }

  onSelect(id: number): void {
    if (id !== undefined && id !== null) {
      // Navegar a la página de detalles con el ID del elemento seleccionado
      this.router.navigate(['layout/post/details', id]);
    } else {
      console.error('Item ID is undefined or null.');
    }
  }

}
