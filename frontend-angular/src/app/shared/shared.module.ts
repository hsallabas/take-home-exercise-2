import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./components/card/card.component";
import { MatCardModule } from "@angular/material/card";
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from "@angular/material";

@NgModule({
  declarations: [CardComponent, HeaderComponent],
  exports: [CardComponent, HeaderComponent],
  imports: [CommonModule, MatCardModule, MatToolbarModule]
})
export class SharedModule {}
