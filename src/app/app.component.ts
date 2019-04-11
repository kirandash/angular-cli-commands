import { Component } from '@angular/core';
import { Recipe } from './interfaces/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli';
  
  ngOnInit(){
    const recipe: Recipe = {
      title: 'Cake',
      subtitle: 'Delicioius',
      description: 'Rs. 350/kg',
      quantity: 1
    }
  } 
}
