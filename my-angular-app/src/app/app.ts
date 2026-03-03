import { Item } from './item';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  newItem: Item | undefined;

  componentTitle = 'My TO-DO List';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get Items() {
    if (this.filter === 'all') {
      return this.allItems;ng gene
    }
    return this.allItems.filter((item) => {
      this.filter === 'done' ? item.done : !item.done;
    });
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,
    });
  }

  // setItem(newItemValue: string) {
  //   this.newItem?.description = newItemValue;
  //   this.newItem?.done = false;
  // }
}
