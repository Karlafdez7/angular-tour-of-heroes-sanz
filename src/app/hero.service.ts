import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of, BehaviorSubject} from 'rxjs';
import {Hero} from './hero';
import dataModel from './dataModel';
// import {HEROES} from './mock-heroes'
//import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  dataApi: dataModel[] = [];
  private localStorageKey = 'heroes';
  private heroesSubject = new BehaviorSubject<Hero[]>([]);
  private urlapi= 'https://staging-api.clima.center/workshops';
  // constructor(private messageService: MessageService) { 
  //   this.updateHeroesFromLocalStorage();
  // }
  constructor(private http: HttpClient){}
  
  getDataApi(){
    console.log('get')
    return this.http.get(this.urlapi);
  }

  getHeroes(): Observable<Hero[]>{
    return this.heroesSubject.asObservable();
  }

  // getHero(id: number): Observable<Hero | undefined> {
  //   return of(this.getStoredHeroes().find(hero => hero.id === id));
  // }
  
  // addHero(name: string): void { 
  //   const newId = this.generateNewHeroId(); 
  //   const newHero: Hero = { id: newId, name: name }; 
  //   const heroes = this.getStoredHeroes(); 
  //   heroes.push(newHero); 
  //   this.saveHeroesToLocalStorage(heroes); 
  //   this.updateHeroesFromLocalStorage();
  // }
  
  // deleteHero(hero: Hero): void {
  //   const heroes = this.getStoredHeroes().filter(h => h.id !== hero.id); 
  //   this.saveHeroesToLocalStorage(heroes); 
  //   this.updateHeroesFromLocalStorage(); 
  // }

  // updateHeroName(name: string, id: number): void {
  //   const heroes = this.getStoredHeroes();
  //   const heroIndex = heroes.findIndex(hero => hero.id === id);

  //   if(heroIndex !== -1){
  //     heroes[heroIndex].name = name;
  //     this.saveHeroesToLocalStorage(heroes);
  //     this.updateHeroesFromLocalStorage();
  //   }
  // }
  
  // private getStoredHeroes(): Hero[] { 
  //   const storedHeroes = localStorage.getItem(this.localStorageKey); 
  //   return storedHeroes ? JSON.parse(storedHeroes) : HEROES; 
  // } 
  
  // private saveHeroesToLocalStorage(heroes: Hero[]): void {
  //   localStorage.setItem(this.localStorageKey, JSON.stringify(heroes));
  // } 
  
  // private updateHeroesFromLocalStorage(): void { 
  //   const heroes = this.getStoredHeroes(); 
  //   this.heroesSubject.next(heroes); 
  // }

  // private generateNewHeroId(): number { 
  //   const heroes = this.getStoredHeroes(); 
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1; 
  // }
}
