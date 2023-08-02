import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedRoute!: string;
  heroes: Hero[] = [];
  
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
      default:
        this.selectedRoute = '';
        break;
    }
  }
}
