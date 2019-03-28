import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { Paginate } from "../model/model.pagonate";

@Component({
  selector: "app-paginate",
  templateUrl: "./paginate.component.html",
  styleUrls: ["./paginate.component.css"]
})
export class PaginateComponent implements OnInit {
  @Input("paginate") paginate: Paginate = new Paginate();
  @Output("onChangePageIndex") onChangePageIndexEmit = new EventEmitter<
    number
  >();
  paginateTempalte: Array<number> = [];
  constructor() {}

  ngOnInit() {
    this.paginateTempalte = this.onPaginateTemplate();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.paginate = changes.paginate.currentValue;
    this.paginateTempalte = this.onPaginateTemplate();
  }
  onPaginateTemplate() {
    let totalPages = this.paginate.totalPages;
    let currentPage = this.paginate.currentPage;
    let totalRanger = 5;
    let ranger = 2;
    let paginateTempalte = [];
    if (currentPage == 1) {
      for (let i = 1; i <= totalRanger; ++i) {
        if (i <= totalPages) {
          paginateTempalte.push(i);
        } else {
          break;
        }
      }
    } else if (currentPage == totalPages) {
      for (let i = totalPages - totalRanger + 1; i <= totalPages; ++i) {
        if (i > 0) {
          paginateTempalte.push(i);
        }
      }
    } else {
      for (let i = currentPage - ranger; i <= currentPage; ++i) {
        if (i > 0) {
          paginateTempalte.push(i);
        }
      }
      for (let i = currentPage + 1; i <= totalPages; ++i) {
        if (i <= currentPage + ranger) {
          paginateTempalte.push(i);
        } else {
          break;
        }
      }
    }
    return paginateTempalte;
  }
  onChangePage(page: number) {
    this.onChangePageIndexEmit.emit(page);
  }
}
