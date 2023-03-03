import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CoreModule } from '../core/core.module';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { PokemonTypesComponent } from './pokemon-types/pokemon-types.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, CoreModule, MatIconModule],
  declarations: [PokemonCardComponent, PokemonListComponent, PokemonProfileComponent, PokemonTypesComponent],
  exports: [PokemonCardComponent, PokemonListComponent, PokemonProfileComponent, PokemonTypesComponent],
})
export class PokemonModule {}
