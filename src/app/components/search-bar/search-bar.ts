import { Component, input, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {

  search = input("initial");
  searchButtonClicked: OutputEmitterRef<void> = output<void>(); 

  searchClick() {
    this.searchButtonClicked.emit();
  }

}
