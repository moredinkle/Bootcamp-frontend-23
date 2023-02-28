import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SearchBarComponent } from './core/search-bar/search-bar.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SelectComponent } from './core/select/select.component';

import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonCardComponent,
        NavbarComponent,
        SearchBarComponent,
        NotFoundComponent,
        SelectComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        AppRoutingModule
    ]
})
export class AppModule { }
