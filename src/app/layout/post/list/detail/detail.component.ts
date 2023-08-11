import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {

  selectedRoute: string = 'view';
  postIdString!: string | null ; // Inicializamos como null

  private routerSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSelectedRoute(this.router.url);
        this.postIdString = this.route.snapshot.paramMap.get('id'); // Actualizamos postIdString
      });
  }

  private updateSelectedRoute(url: string): void {
    const id = this.postIdString;
    if (id !== null) {
      switch (url) {
        case `/layout/post/details/${id}/view`:
          this.selectedRoute = 'view';
          break;
        case `/layout/post/details/${id}/edit`:
          this.selectedRoute = 'edit';
          break;
        default:
          this.selectedRoute = 'view';
      }
    } else {
      this.selectedRoute = '';
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}