import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  bgColor: string = '';
  state: boolean = false;
  constructor(){
    this.bgColor = Math.random() > 0.5 ? 'yellow' : 'blue';
    this.state = Math.random() > 0.5 ? true : false;
  }

  getSize(){
    return this.state === false ? 24 : 16;
  }
}
