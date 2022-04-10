import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { ServiceSpendEffects } from "./app-state/effects/service-spend.effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from './app-state';
import { UserViewEffects } from "./app-state/effects/user-view.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ServiceSpendEffects, UserViewEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
