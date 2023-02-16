import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchSectionComponent } from './search/search-section/search-section.component';
@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        NavbarComponent,
        SearchSectionComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule
    ]
})
export class AppModule { }