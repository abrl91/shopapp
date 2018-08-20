import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

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

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }

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

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }
}