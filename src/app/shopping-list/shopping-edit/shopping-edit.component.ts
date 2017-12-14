import { Ingredient } from './../../models/ingredient.model';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const newIngredient = new Ingredient(this.inputNameRef.nativeElement.value, this.inputAmountRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }

}
