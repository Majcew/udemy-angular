import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() private readonly _recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    {
      name: 'Test Recipe',
      description: 'Air fryer salmon recipe',
      imagePath:
        'https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3.jpg',
    },
    {
      name: 'Hamburger',
      description: 'Juicy beef hamburger',
      imagePath:
        'https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this._recipeWasSelected.emit(recipe);
  }
}
