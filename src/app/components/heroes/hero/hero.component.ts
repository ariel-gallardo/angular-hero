import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/Entities/Hero';

@Component({
  selector: 'heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input()
  Heroe? : Hero

  @Output()
  eventNombre : EventEmitter<string>= new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  verHeroe(){
    this.router.navigate([`/heroes/heroe`,this.Heroe?.id])
  }

  selectHeroe(nombre : string | undefined){
    this.eventNombre?.emit(nombre)
  }

}
