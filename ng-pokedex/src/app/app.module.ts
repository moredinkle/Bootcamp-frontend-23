import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        PokemonModule,
        CoreModule
    ]
})
export class AppModule { }
