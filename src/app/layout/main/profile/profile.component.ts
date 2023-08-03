import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  @Input() username!: string; 
  @Input() email!: string;
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
      case '/main/profile/edit-profile':
        this.selectedRoute = 'edit-profile';
        break;
      case '/main/profile/change-password':
        this.selectedRoute = 'change-password';
        break;
      default:
        this.selectedRoute = '';
        break;
    }
  }


}


