import { Component, OnInit, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/Entities/Hero';
import { HeroesService } from 'src/app/Services/heroes.service';
import HeroesList from 'src/app/Store/HeroesList';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService : HeroesService) { }

  nombreHeroe? : string

  ngOnInit(): void {
    
  }

  public getHeroList() : Hero[] | undefined {
    return this._heroesService.getHeroes();
  }


  setNombreHeroe(nombre : string){
    this.nombreHeroe = nombre;
  }


}
