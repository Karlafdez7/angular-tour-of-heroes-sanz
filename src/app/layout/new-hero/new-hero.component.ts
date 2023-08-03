import { Component } from '@angular/core';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.sass']
})
export class NewHeroComponent {
  newHeroName: string = '';

  constructor(private heroService: HeroService) {}

  addHero() : void {
    if(this.newHeroName.trim()) {
      this.heroService.addHero(this.newHeroName.trim());
      this.newHeroName = '';
      window.location.reload()
    }
  }
}
