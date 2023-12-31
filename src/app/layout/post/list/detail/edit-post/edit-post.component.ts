import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.sass']
})
export class EditPostComponent {

  postDetails!: listModel;
  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    const postIdString = this.route.parent?.snapshot.paramMap.get('id'); // Obtener el ID del parámetro de la ruta como string

    if (postIdString !== null) {
      const postId = Number(postIdString); // Convertir el string a número
      this.listService.getPostById(postId).subscribe((details: listModel) => {
        this.postDetails = details;      
        })
      }

    }

}
