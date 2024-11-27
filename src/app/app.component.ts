import { Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { AddIngredientComponent } from "./add-ingredient/add-ingredient.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ShoppingListComponent, AddIngredientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ingredients?: any[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 }
  ]
}
