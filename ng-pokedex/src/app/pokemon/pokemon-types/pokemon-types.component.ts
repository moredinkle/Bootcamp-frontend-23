import { Component, Input, OnInit } from '@angular/core';
import { shadeColor } from 'src/app/utils/colors';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.sass']
})
export class PokemonTypesComponent implements OnInit {
  @Input()
    types: { name: string; color: string }[] = [];

  constructor() { }

  ngOnInit() {
  }

  modifyColor(color: string, value: number){
    return shadeColor(color, value);
  }

}
