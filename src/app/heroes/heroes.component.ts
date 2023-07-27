import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  
  heroes: Hero[] | undefined = undefined;
  selectedHero: Hero | undefined = undefined;
  selectedHeroId: number | undefined = undefined;

  constructor(private heroService: HeroService){};
  
  ngOnInit(){
    this.getHeroes();
  };

  onSelect (hero : Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  deleteHero(hero: Hero): void {
    if(this.heroes) {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero);
    }
  }
  
}
