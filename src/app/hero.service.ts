import { Injectable } from '@angular/core';
import {Observable, of, BehaviorSubject} from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './mock-heroes'
import {NewHero} from './new-hero/new-hero.model';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private localStorageKey = 'heroes';
  private heroesSubject = new BehaviorSubject<Hero[]>([]);

  constructor(private messageService: MessageService) { 
    this.updateHeroesFromLocalStorage();
  }
  
  getHeroes(): Observable<Hero[]>{
    //this.messageService.add('HeroService: fetched heroes');
    return this.heroesSubject.asObservable();
  }

  getHero(id: number): Observable<Hero | undefined> {
    //this.messageService.add(`HeroService: fetched hero with id=${id}`);
    return of(this.getStoredHeroes().find(hero => hero.id === id));
  }
  
  addHero(name: string): void { 
    const newId = this.generateNewHeroId(); 
    const newHero: Hero = { id: newId, name: name }; 
    const heroes = this.getStoredHeroes(); 
    heroes.push(newHero); 
    this.saveHeroesToLocalStorage(heroes); 
    this.updateHeroesFromLocalStorage();
  }
  
  deleteHero(hero: Hero): void {
    const heroes = this.getStoredHeroes().filter(h => h.id !== hero.id); 
    this.saveHeroesToLocalStorage(heroes); 
    this.updateHeroesFromLocalStorage(); 
  }
  
  private getStoredHeroes(): Hero[] { 
    const storedHeroes = localStorage.getItem(this.localStorageKey); 
    return storedHeroes ? JSON.parse(storedHeroes) : HEROES; 
  } 
  
  private saveHeroesToLocalStorage(heroes: Hero[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(heroes));
  } 
  
  private updateHeroesFromLocalStorage(): void { 
    const heroes = this.getStoredHeroes(); 
    this.heroesSubject.next(heroes); 
  }

  private generateNewHeroId(): number { 
    const heroes = this.getStoredHeroes(); 
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1; 
  }
}
