import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output('selected_item') private readonly _selected_recipe =
    new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected() {
    this._selected_recipe.emit();
  }
}
