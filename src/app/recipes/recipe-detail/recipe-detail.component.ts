import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentRecipeItem: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.currentRecipeItem.ingredients);
  }
}
