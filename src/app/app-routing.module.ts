import { DetalhesPokemonComponent } from './components/detalhes-pokemon/detalhes-pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  {path:'poke', component: PokeListComponent},
  {path:'pokemon/:name', component: DetalhesPokemonComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
