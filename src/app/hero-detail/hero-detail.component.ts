import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined = undefined;
  name: string = '';

  constructor(private route: ActivatedRoute, private heroService: HeroService){}
  
  ngOnInit(): void {
    this.getHeroDetails();
  }

  getHeroDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
      this.name = hero?.name || '';
    });
  }

  updateHeroName(name: string): void{
    if(this.hero) {
      this.heroService.updateHeroName(name, this.hero.id)
    }
  }
}