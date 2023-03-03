import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { shadeColor } from 'src/app/utils/colors';
import { toPokemonProfile } from 'src/app/utils/converter';
import { dummyPokemon } from 'src/app/utils/dummy';
import { PokemonProfile } from '../../utils/types';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.sass']
})
export class PokemonProfileComponent implements OnInit {
  pokemon: PokemonProfile = dummyPokemon;
  menuData = ["About this pokemon", "Stats", "Evolution chain"];
  defaultButtonStyle = "flex items-center justify-center rounded-lg w-full px-8 py-2 shadow-xl ";
  imageIndex = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.subscribe((res: any) => {
      this.pokemon = toPokemonProfile(res.pokemon);
    });
  }

  modifyColor(color: string, value: number){
    return shadeColor(color, value);
  }

  goBack(){
    this.router.navigate(['pokemons']);
  }

  goToProfile(id: number){
    this.router.navigate(['pokemons', id]);
  }

  previousPicture(){
    if(this.imageIndex >= 0) {
      this.imageIndex--;
      this.pokemon.selectedImage = this.pokemon.images[this.imageIndex];
    }
  }

  nextPicture(){
    if(this.imageIndex < this.pokemon.images.length - 1) {
      this.imageIndex++;
      this.pokemon.selectedImage = this.pokemon.images[this.imageIndex];
    }
  }

  findImageIndex(){
    for (const [index, img] of this.pokemon.images.entries()) {
      if(img.url == this.pokemon.selectedImage.url) {
        console.log(index);
        return index
      }
    }
    return -1;
  }


}


