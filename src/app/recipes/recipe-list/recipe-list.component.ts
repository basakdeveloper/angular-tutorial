import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tandoori Chicken', 'Tandoori Chicken', 'https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-34.jpg'),
    new Recipe('Mutton Biriyani', 'Mutton Biriyani', 'https://i0.wp.com/www.foodvedam.com/wp-content/uploads/2014/11/Mutton-Biryani2.jpg?resize=650%2C488')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelcted(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
