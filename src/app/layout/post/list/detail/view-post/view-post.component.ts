import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { of, switchMap } from 'rxjs';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.sass']
})
export class ViewPostComponent {

  postDetails!: listModel | null;
  
  constructor(private listService: ListService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.parent?.paramMap.pipe(
      switchMap(paramMap => {
        const postIdString = paramMap.get('id');
        if (postIdString !== null) {
          const postId = Number(postIdString);
          return this.listService.getPostById(postId);
        } else {
          // Return an observable emitting null if no ID is available
          return of(null);
        }
      })).subscribe((details: listModel | null) => {
      this.postDetails = details;      
      })
  }


}
