import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  enterSearchValue: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  
  onSearchedTextChange() {
    this.searchTextChange.emit(this.enterSearchValue);
  }
}
