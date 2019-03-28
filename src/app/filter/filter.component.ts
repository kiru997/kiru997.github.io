import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent {
  @Input("search") search: string = "";
  @Input("pageSize") pageSize: number = 5;
  @Input("listPageSize") listPageSize: Array<number> = [];
  @Output("onChangeFormState") formStateEmit = new EventEmitter();
  @Output("onChangePageSize") pageSizeEmit = new EventEmitter<number>();
  @Output("onSearch") searchEmit = new EventEmitter<string>();
  constructor() {}
  onChangeFormState() {
    this.formStateEmit.emit();
  }
  onChangePageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.pageSizeEmit.emit(this.pageSize);
  }
  onSearch(search: string) {
    this.search = search;
    this.searchEmit.emit(this.search);
  }
}
