import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe-1', 'This is a test', 'https://latelier-du-burger-nice.fr/wp-content/uploads/2017/11/veggie-burger-0.jpg'),
    new Recipe('A test recipe-2', 'This is another test', 'https://cdn.jamieoliver.com/recipe-database/xtra_med/51137672.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
