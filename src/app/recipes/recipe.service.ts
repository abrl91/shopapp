import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Vegan Hamburger',
            'Mushrooms and Bean',
            'https://latelier-du-burger-nice.fr/wp-content/uploads/2017/11/veggie-burger-0.jpg',
            [
                new Ingredient('mushrooms', 2),
                new Ingredient('bean', 1)
            ]),
        new Recipe(
            'Pumpkin',
            'Pumpkin with surprise',
            'https://cdn.jamieoliver.com/recipe-database/xtra_med/51137672.jpg',
            [
                new Ingredient('pumpkin', 1),
                new Ingredient('Lentils', 1)
            ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes() {
          //get a copy of the array, not a reference
          return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}