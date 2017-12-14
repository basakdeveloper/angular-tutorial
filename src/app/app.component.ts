import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedFeature = 'recipes'; // recipes or shopping-list

  selectFeature(feature: string) {
    this.selectedFeature = feature;
  }
}
