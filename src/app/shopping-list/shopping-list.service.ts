import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private _ingredients: Ingredient[] = [
    {
      name: "Cheese",
      amount: 3,
    },
  ];

  getIngredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }
}
