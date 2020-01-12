import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Thid is a test',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/1:1/w_800%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new Recipe('Test2', 'Thid is a test',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/1:1/w_800%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
  ];
  @Output() clickedItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onItemClick(clickedItem: Recipe) {
    this.clickedItem.emit(clickedItem);
  }
}
