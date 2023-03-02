import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { shadeColor } from 'src/app/utils/colors';
import { toPokemonProfile } from 'src/app/utils/converter';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.sass']
})
export class PokemonProfileComponent implements OnInit {
  pokemon: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((res: any) => {
      this.pokemon = toPokemonProfile(res.pokemon);
      console.log(this.pokemon);
    });
  }

  modifyColor(color: string, value: number){
    return shadeColor(color, value);
  }

}


