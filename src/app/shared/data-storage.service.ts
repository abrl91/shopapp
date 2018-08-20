import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/Rx';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private rs: RecipeService,  
                private auth: AuthService) {}

    storeRecipe() {
        const token =  this.auth.getToken();
        return this.http.put('https://recipe-book-15f18.firebaseio.com/recipes.json?auth=' + token ,this.rs.getRecipes());
    }

    getRecipe() {
        const token =  this.auth.getToken();

        this.http.get('https://recipe-book-15f18.firebaseio.com/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                })
            .subscribe((recipes: Recipe[]) => {
                this.rs.setRecipes(recipes);
            });
    }
}