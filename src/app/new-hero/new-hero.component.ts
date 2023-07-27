import { Component } from '@angular/core';
import {NewHero} from './new-hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.sass']
})
export class NewHeroComponent {
  newHeroName: string = '';

  constructor(private heroService: HeroService) {}

  // onSubmit(): void{
  //   this.heroService.addHero(this.newHero).subscribe(hero => hero.name);
  //   this.newHero = { id: 0 , name: ''}
  //}

  addHero() : void {
    if(this.newHeroName.trim()) {
      this.heroService.addHero(this.newHeroName.trim());
      this.newHeroName = '';
      window.location.reload()
    }
  }
}
