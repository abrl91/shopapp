import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  onEditItem(index: number) {
    //next is used to emit data and the subject on tje slService is like the EventEmitter
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
