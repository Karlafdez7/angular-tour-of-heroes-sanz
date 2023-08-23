import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, tap } from 'rxjs';
import vehicleModel from './vehicleModel';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleApi!: vehicleModel[];
  // public itemSubject: BehaviorSubject<vehicleModel | null> = new BehaviorSubject<vehicleModel | null>(null);
  private urlapi = 'https://staging-api.clima.center/workshops'

  constructor(private http: HttpClient) {}

  // getPost(){
  //   return this.http.get<vehicleModel[]>(this.urlapi);
  // }

  // getPostById(id: number): Observable<vehicleModel> {
  //   const url = `${this.urlapi}/${id}`;
  //   return this.http.get<vehicleModel>(url);
  // }

  // setSelectItem(item: vehicleModel | null){
  //   this.itemSubject.next(item)
  // }

  getVehicleData(): Observable<vehicleModel[]> {
    const storedData = localStorage.getItem('vehicleData');

    if (storedData) {
      this.vehicleApi = JSON.parse(storedData);
      return of(this.vehicleApi);

    } else {
      return this.http.get<vehicleModel[]>(this.urlapi).pipe(
        tap(apiData => {
          this.vehicleApi = apiData;
          localStorage.setItem('vehicleData', JSON.stringify(apiData)); // Save in localStorage
        })
      );
    }
  }
}
