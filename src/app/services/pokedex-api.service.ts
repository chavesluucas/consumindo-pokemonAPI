import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokeList } from '../models/pokemon/poke-list';
import { Pokemon } from '../models/pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {

  constructor(private http: HttpClient) { }
  //Informar o HTTP para utilizar ele


  //Criando o metodo para consumir a API
  getListPokemons(next?:string, offset:number = 0, limit: number = 0){


    //Criando váriavel da URL consumida
    let url:string=`${environment.urlPokeApiBase}/pokemon`


    if(next){
      url=next;
    }

    if(!(offset == 0 && limit == 0)){
      url += `?offset=${offset}&limit=${limit}`;
    }
    return this.http.get<PokeList>(url);
  }


  getPokemonByNameOrId(nameOrId: string){
    let url:string=`${environment.urlPokeApiBase}/pokemon/${nameOrId}/`;

    return this.http.get<Pokemon>(url);
  }


}
