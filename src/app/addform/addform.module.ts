import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddformComponent } from "./addform.component";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [AddformComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddformComponent]
})
export class AddformModule {}
