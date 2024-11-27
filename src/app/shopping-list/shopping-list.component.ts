import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadShoppingList } from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredients?: any[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadShoppingList())
  }
}
