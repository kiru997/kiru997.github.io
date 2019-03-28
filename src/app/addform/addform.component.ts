import {
  Component,
  Output,
  Input,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Framework } from "../model/model.framework";
@Component({
  selector: "app-addform",
  templateUrl: "./addform.component.html",
  styleUrls: ["./addform.component.css"]
})
export class AddformComponent implements OnChanges {
  constructor(private fb: FormBuilder) {}
  @Input("framework") framework: Framework = new Framework("", "", "");
  @Output("onCloseForm") onCloseFormEmit = new EventEmitter();
  @Output("onSubmitForm") onSubmitFormEmit = new EventEmitter<Framework>();
  frameworkForm = this.fb.group({
    id: [this.framework.id, Validators.required],
    name: [this.framework.name, Validators.required],
    image: [this.framework.image, Validators.required],
    puslisher: [this.framework.puslisher, Validators.required]
  });
  ngOnChanges() {
    this.frameworkForm = this.fb.group({
      id: [this.framework.id, Validators.required],
      name: [this.framework.name, Validators.required],
      image: [this.framework.image, Validators.required],
      puslisher: [this.framework.puslisher, Validators.required]
    });
  }
  onSubmitForm() {
    this.onSubmitFormEmit.emit(this.frameworkForm.value);
  }
  onCloseForm() {
    this.onCloseFormEmit.emit();
  }
}
