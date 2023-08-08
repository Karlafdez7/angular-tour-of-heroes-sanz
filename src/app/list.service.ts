import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import listModel from './listModel'
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listApi!:listModel[];
  private urlapi = 'https://jsonplaceholder.typicode.com/posts'
  // private listSubject = new BehaviorSubject<listModel[]>([]);
  
  constructor(private http: HttpClient) {
    // this.fetchListApi();
   }

  getPost(){
  
    return this.http.get<listModel[]>(this.urlapi);
  }

  // getList(){
  //   this.getPost().subscribe((list:listModel[])=> {
  //     this.listApi = list;

      
  //   }); 
  // }
  getItemId(id:number): Observable<any>{
    const url = `${this.urlapi}/${id}`
    return this.http.get(url);
  }

  //  getList(): Observable<listModel[]> {
  //   return this.listSubject.asObservable();
  // }

  // private fetchListApi() {
  //   this.http.get<listModel[]>(this.urlapi).subscribe(
  //     (data => {
  //       this.listSubject.next(data);
  //     }),
  //   );
  // }
}
