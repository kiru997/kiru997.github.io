import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list.component";
import { ModeldeleteComponent } from "../modeldelete/modeldelete.component";
@NgModule({
  declarations: [ListComponent,ModeldeleteComponent],
  imports: [
    CommonModule,
  ],
  exports:[ListComponent]
})
export class ListModule { }
