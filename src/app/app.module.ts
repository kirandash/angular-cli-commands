import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { AddcommasPipe } from './pipes/addcommas.pipe';
import { PaymentGuard } from './guards/payment.guard';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    AddcommasPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [PaymentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
