import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
  selectedRoute!: string;
  postIdString : string|null = this.route.snapshot.paramMap.get('id'); 


  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthServiceService) {
    // this.updateSelectedRoute(this.router.url); // Inicializar selectedRoute con la ruta actual al cargar el componente

    // Suscripción a eventos de navegación para actualizar selectedRoute al cambiar la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedRoute(this.router.url, this.postIdString);
      }
    });
  }

  private updateSelectedRoute(url: string, id:string|null): void {
    switch (url) {
      case '/layout/dashboard':
        this.selectedRoute = 'dashboard';
        break;
      case '/layout/heroes':
        this.selectedRoute = 'heroes';
        break;
      case '/layout/post':
        this.selectedRoute = 'list';
        break;
      case `/layout/post/details/${id}/view`:
        this.selectedRoute = 'list';
      break;
      case `/layout/post/details/${id}/edit`:
        this.selectedRoute = 'list';
      break;
      case '/layout/main':
        this.selectedRoute = 'main';
        break;
      case '/layout/main/profile':
        this.selectedRoute = 'main';
        break;
      case '/layout/main/edit-profile':
        this.selectedRoute = 'main';
        break;
      case '/layout/main/change-password':
        this.selectedRoute = 'main';
        break;
      default:
        this.selectedRoute = 'list';
        break;
    }
  }

  logout(){
    this.authService.logout()
  }
}

