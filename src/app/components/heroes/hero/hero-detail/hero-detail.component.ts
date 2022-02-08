import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/Entities/Hero';
import { HeroesService } from 'src/app/Services/heroes.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroe? : Hero

  constructor(
      private _heroService : HeroesService,
      private _router : ActivatedRoute,
      private _location : Location
    ) { }

  ngOnInit(): void {
    let id : number = 0
      this._router.params.subscribe(observer => {
        id = Number(observer['id'])
      })
    if(id > 0){
      this.heroe = this._heroService.getOneHeroe(id);
    }
  }

  volverAtras(){
    this._location.back()
  }

}
