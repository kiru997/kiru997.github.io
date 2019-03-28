import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-modeldelete",
  templateUrl: "./modeldelete.component.html",
  styleUrls: ["./modeldelete.component.css"]
})
export class ModeldeleteComponent {
  constructor() {}
  @Output("onConfirmDelete") onConfirmDeleteEmit = new EventEmitter<Boolean>();
  onDismisDelete() {
    this.onConfirmDeleteEmit.emit(false);
  }
  onConfirmDelete() {
    this.onConfirmDeleteEmit.emit(true);
  }
}
