import { PokedexApiService } from 'src/app/services/pokedex-api.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './../../models/pokemon/pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.scss']
})
export class DetalhesPokemonComponent implements OnInit {

  pokemonObj: Pokemon = new Pokemon({});

  constructor(private route: ActivatedRoute,
              private pokemonService: PokedexApiService) { }

  ngOnInit(): void {

    //
    let name = this.route.snapshot.paramMap.get('name');

    if(name){
      this.pokemonService
      .getPokemonByNameOrId(name)
      .subscribe((pokemon) => {
        console.log(pokemon);
        this.pokemonObj = pokemon;
      });
    }

  }

}
