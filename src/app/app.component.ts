import { Component, OnInit } from "@angular/core";
import { FrameworkService } from "./services/framework.service";
import { Framework } from "./model/model.framework";
import { Paginate } from './model/model.pagonate';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isFormOpen: Boolean = false;
  isEdit: Boolean = false;
  listPageSize: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  search: string = "";
  framework: Framework = new Framework("", "", "");
  paginate: Paginate = new Paginate();
  pageIndex: number = 1;
  pageSize: number = 2;
  constructor(private frameworkService: FrameworkService) {}
  onSetPaginate() {
    this.paginate = this.frameworkService.getPaginate(
      this.search,
      this.pageIndex,
      this.pageSize
    );
  }
  ngOnInit() {
    this.onSetPaginate();
  }
  onCloseForm() {
    this.framework = new Framework("", "", "");
    this.isFormOpen = false;
  }
  onChangeFormState() {
    this.isFormOpen = !this.isFormOpen;
  }
  onChangePageSize($event: number) {
    this.pageSize = $event;
    this.pageIndex = 1;
    this.onSetPaginate();
  }
  onSearch($event: string) {
    this.search = $event;
    this.pageIndex = 1;
    this.onSetPaginate();
  }
  onGetEdit(framework: Framework) {
    this.isEdit = true;
    this.framework = framework;
    this.isFormOpen = true;
  }
  onSubmitForm(framework: Framework) {
    if (this.isEdit) {
      this.frameworkService.edit(framework);
    } else {
      this.frameworkService.add(framework);
    }
    this.isFormOpen = false;
    this.isEdit = false;
    this.framework = new Framework("", "", "");
    this.onSetPaginate();
  }
  onDelete(id: string) {
    this.frameworkService.delete(id);
    this.onSetPaginate();
  }
  onChangePageIndex(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.onSetPaginate();
  }
}
