import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {

  selectedRoute!: string;
  postIdString : string|null = this.route.snapshot.paramMap.get('id'); 


  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedRoute(this.router.url, this.postIdString);
      }
    });
   }


  private updateSelectedRoute(url: string, id:string|null): void {
    switch (url) {
      case `/layout/post/details/${id}/view`:
        this.selectedRoute = 'view';
      break;
      case `/layout/post/details/${id}/edit`:
        this.selectedRoute = 'edit';
      break;
    }
  }
}