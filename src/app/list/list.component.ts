import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Framework } from "../model/model.framework";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  @Input("data") data: Array<Framework> = [];
  @Output("onGetEdit") onGetEditEmit = new EventEmitter<Framework>();
  @Output("onDelete") onDeleteEmit = new EventEmitter<string>();
  idDelete: string = "";
  constructor() {}
  onGetEdit(framework: Framework) {
    this.onGetEditEmit.emit(framework);
  }
  onDelete(id: string) {
    this.idDelete = id;
  }
  onConfirmDelete(isDelete: Boolean) {
    if (isDelete) {
      this.onDeleteEmit.emit(this.idDelete);
    }
    this.idDelete = "";
  }
}
