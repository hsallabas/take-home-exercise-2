import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./components/card/card.component";
import { MatCardModule } from "@angular/material/card";
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CardComponent, HeaderComponent],
  exports: [CardComponent, HeaderComponent],
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule, RouterModule]
})
export class SharedModule {}
