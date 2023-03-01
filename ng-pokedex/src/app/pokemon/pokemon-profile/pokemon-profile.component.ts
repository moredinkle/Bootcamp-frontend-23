import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toPokemonProfile } from 'src/app/utils/converter';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.sass']
})
export class PokemonProfileComponent implements OnInit {
  pokemon: any = {};

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params['id']);
  }

  ngOnInit() {
    this.route.data.subscribe((res: any) => {
      this.pokemon = toPokemonProfile(res.pokemon);
      console.log(this.pokemon);
    });
  }

}


