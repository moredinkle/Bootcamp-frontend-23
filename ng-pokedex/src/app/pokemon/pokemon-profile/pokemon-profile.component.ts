import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.sass']
})
export class PokemonProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}


