import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  // postDetails!: listModel;

  constructor(private listService: ListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const postIdString = this.route.snapshot.paramMap.get('id'); // Obtener el ID del parámetro de la ruta como string
    
    if (postIdString !== null) {
      const postId = Number(postIdString); // Convertir el string a número
      this.listService.getPostById(postId).subscribe((details: listModel) => {
        this.listService.saveDetails(details);
        console.log('0', details)})
        // if(this.postDetails){
        //   this.listService.saveDetails(this.postDetails)
        //   console.log('1', this.postDetails)
        }
      };
    }

    

  

  // getDetailsToService(){
    
  // }

