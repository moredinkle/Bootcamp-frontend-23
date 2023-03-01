import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [NavbarComponent, SearchBarComponent, NotFoundComponent, SelectComponent],
  exports: [NavbarComponent, SearchBarComponent, NotFoundComponent, SelectComponent]
})
export class CoreModule {}
