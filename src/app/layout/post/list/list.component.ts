import { Component, Input, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['id', 'title'];
  dataSource: listModel[] = [];
  @Input() searchInput!: string;
  constructor(private listService: ListService, private route: ActivatedRoute, private router : Router){

  };
  
  ngOnInit() {
    this.listService.getPost().subscribe((list:listModel[]) => {
      this.listApi = list;
      this.dataSource = list;
    }); 
    
    console.log(this.searchInput, 'esto es list')
  }

  onSelect(id: number): void {
    if (id !== undefined && id !== null) {
      this.router.navigate(['layout/post/details', id]);
    } else {
      console.error('Item ID is undefined or null.');
    }
  }

  applyFilter(value: string) {
    value = value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios en blanco
    this.dataSource = this.listApi.filter(item => item.title.toLowerCase().includes(value));
  }
  

}
