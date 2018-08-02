import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "../../../node_modules/rxjs";

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients() {
          //get a copy of the array
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}