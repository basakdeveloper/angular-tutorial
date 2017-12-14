import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Tandoori Chicken', 'Tandoori Chicken',
                'https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-34.jpg'),
    new Recipe('Mutton Biriyani', 'Mutton Biriyani',
                'https://i0.wp.com/www.foodvedam.com/wp-content/uploads/2014/11/Mutton-Biryani2.jpg?resize=650%2C488')
  ];

  constructor() { }

  ngOnInit() {
  }

}
