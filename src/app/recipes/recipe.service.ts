import { ThisReceiver } from "@angular/compiler";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    {
      name: "Test Recipe",
      description: "Air fryer salmon recipe",
      imagePath:
        "https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3.jpg",
      ingredients: [
        {
          name: "Salmon",
          amount: 1,
        },
        {
          name: "Butter",
          amount: 1,
        },
      ],
    },
    {
      name: "Hamburger",
      description: "Juicy beef hamburger",
      imagePath:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      ingredients: [
        {
          name: "Buns",
          amount: 1,
        },
        {
          name: "Beef patties",
          amount: 1,
        },
        {
          name: "Cheese",
          amount: 2,
        },
      ],
    },
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
