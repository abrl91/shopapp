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
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/3/5/0/FNK_Healthy-Vega-Burger_s4x3.jpg.rend.hgtvcom.616.462.suffix/1394028524949.jpeg',
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

      getRecipe(index: number) {
          return this.recipes[index]; //index because we have an array of recipes
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}