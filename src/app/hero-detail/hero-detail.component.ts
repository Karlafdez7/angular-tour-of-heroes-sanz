import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined = undefined;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroDetails();
  }

  getHeroDetails(): void {
    const heroId= Number (this.route.snapshot.paramMap.get('heroId'));
    this.heroService.getHero(heroId).subscribe(hero => (this.hero = hero));
  }
}
