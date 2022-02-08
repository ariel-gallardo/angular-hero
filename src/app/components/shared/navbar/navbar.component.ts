import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/Services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(private _heroServices : HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroes(word : string){
    this._heroServices.findHeroByName(word)
  }
}
