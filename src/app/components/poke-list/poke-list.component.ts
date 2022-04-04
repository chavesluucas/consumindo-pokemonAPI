import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ResponseLink } from 'src/app/models/pokemon/response-link';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {


  //Subject é uma Promisses (Promessa)
  listPokemon$ = new Subject<ResponseLink[]>();

  urlImagesFront: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  constructor(private route: ActivatedRoute,
              private pokemonService: PokedexApiService) { }

  ngOnInit(): void {
    this.pokemonService
        .getListPokemons(undefined, 0, 151)
        .subscribe(
          (response) => {
            this.listPokemon$.next(response.results);
          }
        );
  }

}
