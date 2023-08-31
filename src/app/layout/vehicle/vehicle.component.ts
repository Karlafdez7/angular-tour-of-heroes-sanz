import { Component } from '@angular/core';

import vehicleModel from 'src/app/vehicleModel';
import { VehicleService } from '../../vehicle.service';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.sass'],
})
export class VehicleComponent {

  vehicleApi: vehicleModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'city', 'country'];
  dataSource: vehicleModel[] = [];

  results: string[] = []

  typingTimer: any;
  
  constructor(private vehicleService: VehicleService){};
  
  ngOnInit() {
    this.loadVehicleData();
  }

  loadVehicleData() {
    this.vehicleService.getVehicleData().subscribe({
      next: (data: vehicleModel[]) => {
        this.vehicleApi = data;
        this.dataSource = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      }
  });
  }

  handleSearch(value: string | '') {
    
      const filterValue = value.toLowerCase();
      const nameVehicleApi = this.vehicleApi.map(item => item.name)
      // this.isLoading=false;
      if(value !== ''){
        this.results = nameVehicleApi.filter(option => option.toLowerCase().includes(filterValue));
      } else {
        this.results = []
      }
          
  }

  filterSelectedItem(item: any) {
    if (item) {
      // Filtrar los detalles seleccionados basados en el valor del filtro
      const filterSelectedItem = this.vehicleApi.filter(row =>
        row.name.toLowerCase().includes(item.toLowerCase())
      );
        if(filterSelectedItem.length > 0 ){
          this.dataSource = filterSelectedItem;
        } else{
          this.dataSource= [];
        }
    }
  }

  handleEvent(item: any){
    this.filterSelectedItem(item);
  }


  // applyFilter(value: string) {
  //   value = value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios en blanco
  //   this.dataSource = this.listApi.filter(item => item.title.toLowerCase().includes(value));
  // }  

}
