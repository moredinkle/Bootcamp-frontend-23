import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  {
    path: 'pokemons',
    component: PokemonListComponent,
    children: [{ path: ':id', component: PokemonProfileComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
