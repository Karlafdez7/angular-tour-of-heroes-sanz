import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import listModel from './listModel'
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listApi:listModel[] = [];
  private urlapi = 'https://jsonplaceholder.typicode.com/posts'

  
  constructor(private http: HttpClient) {}


  getPostById(id: number): Observable<listModel> {
    const url = `${this.urlapi}/${id}`;
    return this.http.get<listModel>(url);
  }

  deleteById(id: number): Observable<listModel> {
    const url = `${this.urlapi}/${id}`;
    return this.http.delete<listModel>(url).pipe(tap(() => {
      this.listApi = this.listApi.filter(item => item.id !== id);
      localStorage.setItem('listData', JSON.stringify(this.listApi));
    }));
  }

  getListData(): Observable<listModel[]> {
    const storedData = localStorage.getItem('listData');

    if (storedData) {
      this.listApi = JSON.parse(storedData);
      return of(this.listApi);

    } else {
      return this.http.get<listModel[]>(this.urlapi).pipe(
        tap(apiData => {
          this.listApi = apiData;
          localStorage.setItem('listData', JSON.stringify(apiData)); // Save in localStorage
        })
      );
    }
  }

}
