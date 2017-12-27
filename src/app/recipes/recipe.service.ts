import { EventEmitter } from '@angular/core';
import { Recipe } from './../models/recipe.model';

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tandoori Chicken', 'Tandoori Chicken',
                    'https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-34.jpg'),
        new Recipe('Mutton Biriyani', 'Mutton Biriyani',
                    'https://i0.wp.com/www.foodvedam.com/wp-content/uploads/2014/11/Mutton-Biryani2.jpg?resize=650%2C488')
      ];

    getRecipe() {
        return this.recipes.slice();
    }
}
