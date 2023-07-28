import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedRoute: string | undefined


  ngOnInit(){
    this.onSelect('dashboard');
  }

  onSelect(route: string) : void {
    route === 'dashboard' ? this.selectedRoute = 'dashboard' : this.selectedRoute = 'heroes';
  }
}
