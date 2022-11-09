import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationsComponent } from './components/generations/generations.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokpok', component: PokemonsComponent },
  { path: 'generations', component: GenerationsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
