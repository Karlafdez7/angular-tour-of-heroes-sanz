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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthServiceService) {
    this.updateSelectedRoute(this.router.url); // Inicializar selectedRoute con la ruta actual al cargar el componente

    // Suscripción a eventos de navegación para actualizar selectedRoute al cambiar la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedRoute(this.router.url);
      }
    });
  }

  private updateSelectedRoute(url: string): void {
    switch (url) {
      case '/layout/dashboard':
        this.selectedRoute = 'dashboard';
        break;
      case '/layout/heroes':
        this.selectedRoute = 'heroes';
        break;
      case '/layout/post/list':
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
        this.selectedRoute = '';
        break;
    }
  }

  logout(){
    this.authService.logout()
  }
}

