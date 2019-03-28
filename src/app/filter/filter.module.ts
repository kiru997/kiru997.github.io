import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FilterComponent } from "./filter.component";
@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule,FormsModule],
  exports: [FilterComponent]
})
export class FilterModule {}
