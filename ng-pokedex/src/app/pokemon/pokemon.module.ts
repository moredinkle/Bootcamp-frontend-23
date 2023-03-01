import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule, CoreModule, AppRoutingModule],
  declarations: [PokemonCardComponent, PokemonListComponent],
  exports: [PokemonCardComponent, PokemonListComponent],
})
export class PokemonModule {}
