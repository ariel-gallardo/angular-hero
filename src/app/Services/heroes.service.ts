import { Injectable } from '@angular/core';
import { Hero } from '../Entities/Hero';
import HeroesList from '../Store/HeroesList';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesList? : Hero[]
  private isChanged : boolean = false;

  constructor() {
    this.heroesList = HeroesList
  }

  public getHeroes () { return this.heroesList};
  public getOneHeroe (id : number) { return this.heroesList?.find(h => h.id == id)};

  public findHeroByName(word : string){
      this.heroesList = HeroesList
      if(word.length > 0)
      this.heroesList = this.heroesList?.filter(h => {
          /*let result : number | undefined = h.nombre?.toLocaleLowerCase()?.indexOf(word.toLocaleLowerCase());
          if(result){
            return result > 0
          }
          return false*/
          return h.nombre?.toLocaleLowerCase().includes(word.toLocaleLowerCase())
      })

  }


}
