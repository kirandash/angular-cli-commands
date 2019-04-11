import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { AddcommasPipe } from './pipes/addcommas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    AddcommasPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
