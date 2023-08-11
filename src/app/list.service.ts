import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import listModel from './listModel'
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listApi!:listModel[];
  public itemSubject: BehaviorSubject<listModel | null> = new BehaviorSubject<listModel | null>(null);
  private urlapi = 'https://jsonplaceholder.typicode.com/posts'
  
  constructor(private http: HttpClient) {}

  getPost(){
    return this.http.get<listModel[]>(this.urlapi);
  }

  getPostById(id: number): Observable<listModel> {
    const url = `${this.urlapi}/${id}`;
    return this.http.get<listModel>(url);
  }

  setSelectItem(item: listModel | null){
    this.itemSubject.next(item)
  }
  // saveDetails(item: listModel){
  //   this.itemSubject.next(item)
  // }

  // getItem(): Observable<listModel | null> {
  //   return this.itemSubject.asObservable();
  // }
}
