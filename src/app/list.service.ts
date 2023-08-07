import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import listModel from './listModel'
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private urlapi = 'https://jsonplaceholder.typicode.com/posts'
  private listSubject = new BehaviorSubject<listModel[]>([]);
  
  constructor(private http: HttpClient) {
    this.fetchListApi();
   }

   getItems(): Observable<listModel[]> {
    return this.listSubject.asObservable();
  }

  private fetchListApi() {
    this.http.get<listModel[]>(this.urlapi).subscribe(
      (data => {
        this.listSubject.next(data);
      }),
    );
  }
}
