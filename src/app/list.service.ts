import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import listModel from './listModel'
import { Observable, BehaviorSubject, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listApi:listModel[] = [];
  private urlapi = 'https://jsonplaceholder.typicode.com/posts'
  
  constructor(private http: HttpClient) {}

  getPost(){
    return this.http.get<listModel[]>(this.urlapi);
  }

  getPostById(id: number): Observable<listModel> {
    const url = `${this.urlapi}/${id}`;
    return this.http.get<listModel>(url);
  }

  deleteById(id: number): Observable<listModel> {
    const url = `${this.urlapi}/${id}`;
    return this.http.delete<listModel>(url).pipe(tap(() => {
      this.listApi = this.listApi.filter(item => item.id !== id)
    }));
  }
}
