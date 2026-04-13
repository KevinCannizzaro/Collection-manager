import { Component, signal } from '@angular/core';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [CollectionItemCard, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  count = 0;
  search = '';

  coin! : CollectionItem;
  linx! : CollectionItem;

  constructor() {
    this.coin = new CollectionItem();
    this.coin.name = 'Pièces de 1972';
    this.coin.description = 'Pièce obtenu dans les jeux vidéos';
    this.coin.rarity = 'Commune';
    this.coin.image = 'img/coin1.png';
    this.coin.price = 170;

    this.linx = new CollectionItem();
  }

  increaseCount() {
    this.count++;
  }
  
}
