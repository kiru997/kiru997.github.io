import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FilterModule } from "./filter/filter.module";
import { AddformModule } from "./addform/addform.module";
import { ListModule } from "./list/list.module";
import { PaginateModule } from "./paginate/paginate.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FilterModule,
    ListModule,
    AddformModule,
    PaginateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
