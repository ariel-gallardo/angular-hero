import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailComponent } from './components/heroes/hero/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'heroes', component: HeroesComponent},
  { path:'heroes/heroe/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
