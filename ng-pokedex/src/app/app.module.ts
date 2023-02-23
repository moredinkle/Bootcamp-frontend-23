import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './core/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonCardComponent,
        NavbarComponent,
        SearchBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ]
})
export class AppModule { }
