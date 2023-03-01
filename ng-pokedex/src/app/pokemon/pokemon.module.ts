import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [PokemonCardComponent, PokemonListComponent],
  exports: [PokemonCardComponent, PokemonListComponent],
})
export class PokemonModule {}
