import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent  {
  searchTerm = '';
  inputClasses = "w-full py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500";
  @Input()
  placeholder="";
  @Output()
  searchEvent = new EventEmitter<string>();

  searchChange(value: string) {
    this.searchEvent.emit(value);
  }

}
