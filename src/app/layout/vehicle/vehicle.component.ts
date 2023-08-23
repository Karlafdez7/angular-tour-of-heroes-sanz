import { Component, Input, Output } from '@angular/core';

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
    console.log('handleSearch', value)
    
      const filterValue = value.toLowerCase();
      const nameVehicleApi = this.vehicleApi.map(item => item.name)
      // this.isLoading=false;
      if(value !== ''){
        this.results = nameVehicleApi.filter(option => option.toLowerCase().includes(filterValue));
      } else {
        this.results = []
      }
      
    // clearTimeout(this.typingTimer);
    // if (value !== '') {
    //   this.typingTimer = setTimeout(() => {
    //     this.vehicleService.searchProduct(value).pipe(toArray()).subscribe(
    //       products => {
    //         this.products = products[0];
    //         this.productsList = products[0].map(device => device.reference);
    //       },
    //       error => console.warn(error.error.message)
    //     )
    //   }, 500);
    // } else {
    //   this.products = [];
    //   this.productsList = [];
    // }
  }


  // applyFilter(value: string) {
  //   value = value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios en blanco
  //   this.dataSource = this.listApi.filter(item => item.title.toLowerCase().includes(value));
  // }  

}
