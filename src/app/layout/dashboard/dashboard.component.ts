import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Hero} from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero!: Hero;
  heroId! : number;
  
  constructor(private heroService: HeroService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.heroId = params['id'];
    })
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect (hero : Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}