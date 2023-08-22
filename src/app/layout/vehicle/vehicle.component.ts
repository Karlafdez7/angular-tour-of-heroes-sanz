import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import listModel from 'src/app/listModel';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.sass']
})
export class VehicleComponent {
  @Input() searchInput!: string;
  listApi: listModel[] = [];
  displayedColumns: string[] = ['selectAll','id', 'title'];
  dataSource: listModel[] = [];
  

  @Output() selectedRowsChanged = new EventEmitter<listModel[]>();

  selectedRows: listModel[] = [];
  allSelected: boolean = false;
  
  constructor(private vehicleService: VehicleService, private route: ActivatedRoute, private router : Router){

  };
  
  ngOnInit() {
    // this.listService.getPost().subscribe((list:listModel[]) => {
    //   this.listApi = list;
    //   this.dataSource = list;
    // });
    this.loadVehicleData();
  }

  loadVehicleData() {
    this.vehicleService.getVehicleData().subscribe({
      next: (data: listModel[]) => {
        this.listApi = data;
        this.dataSource = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      }
  });
  }


  // applyFilter(value: string) {
  //   value = value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios en blanco
  //   this.dataSource = this.listApi.filter(item => item.title.toLowerCase().includes(value));
  // }  

}
