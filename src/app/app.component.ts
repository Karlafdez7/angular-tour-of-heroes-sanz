import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedRoute!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
      case '/dashboard':
        this.selectedRoute = 'dashboard';
        break;
      case '/heroes':
        this.selectedRoute = 'heroes';
        break;
      case '/main':
        this.selectedRoute = 'main';
        break;
      case '/main/profile':
        this.selectedRoute = 'main';
        break;
      case '/main/profile/edit-profile':
        this.selectedRoute = 'main';
        break;
      case '/main/profile/change-password':
        this.selectedRoute = 'main';
        break;
      case '/credentials':
        this.selectedRoute = 'credentials';
        break;
      case '/credentials/login':
        this.selectedRoute = 'credentials';
        break;
        case '/credentials/login/new-profile':
      this.selectedRoute = 'credentials';
      break;
      default:
        this.selectedRoute = '';
        break;
    }
  }
}
