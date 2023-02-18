import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchSectionComponent } from './search/search-section/search-section.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonCardComponent,
        NavbarComponent,
        SearchSectionComponent,
        SearchBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule
    ]
})
export class AppModule { }
