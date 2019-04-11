import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeMainItemComponent } from './recipe-main-item/recipe-main-item.component';
import { CustominputDirective } from './directives/custominput.directive';
import { CustomtextareaDirective } from './directives/customtextarea.directive';

@NgModule({
  declarations: [RecipeMainItemComponent, CustominputDirective, CustomtextareaDirective],
  imports: [
    CommonModule
  ]
})
export class MainItemsModule { }
