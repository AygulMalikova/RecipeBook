import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schitzel',
      'This is a test',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/1:1/w_800%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Burger',
      'This is a test',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/1:1/w_800%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
