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

  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) {
    
    this.updateSelectedRoute(this.router.url); // Inicializar selectedRoute con la ruta actual al cargar el componente

    // Suscripción a eventos de navegación para actualizar selectedRoute al cambiar la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedRoute(this.router.url);
      }
    });
   }

  // ngOnInit() {
  //   const postIdString = this.route.snapshot.paramMap.get('id'); // Obtener el ID del parámetro de la ruta como string
    
  //   if (postIdString !== null) {
  //     const postId = Number(postIdString); // Convertir el string a número
  //     this.listService.getPostById(postId).subscribe((details: listModel) => {
  //       this.listService.saveDetails(details);    
  //       })
  //     }
  //   }

    private updateSelectedRoute(url: string): void {
      switch (url) {
        case '/layout/post/details/1/view':
          this.selectedRoute = 'view';
        break;
        case '/layout/post/details/1/edit':
          this.selectedRoute = 'edit';
        break;
    }
  }
}