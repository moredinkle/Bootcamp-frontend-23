import { Component, Input } from '@angular/core';
import { shadeColor } from 'src/app/utils/colors';
import { PokemonForCard } from '../../utils/types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: PokemonForCard;

  modifyColor(color: string, value: number){
    return shadeColor(color, value);
  }

}
