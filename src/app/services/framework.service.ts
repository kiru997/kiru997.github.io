import { Injectable } from "@angular/core";
import paginate from "paginate-array";
import { findIndex, filter } from "lodash";
import { Framework } from "../model/model.framework";
import { Paginate } from "../model/model.pagonate";
@Injectable({
  providedIn: "root"
})
export class FrameworkService {
  data: Array<Framework> = [];
  constructor() {}
  saveDataToLocalStorage() {
    return localStorage.setItem("data", JSON.stringify(this.data));
  }
  getPaginate(
    search: string = "",
    pageIndex: number = 1,
    pageSize: number = 5
  ): Paginate {
    if (typeof Storage !== "undefined") {
      if (localStorage.getItem("data")) {
        this.data = JSON.parse(localStorage.getItem("data"));
      }
    }
    if (search != "") {
      this.data = filter(this.data, framework => {
        return (
          framework.name.toLowerCase().includes(search.toLowerCase()) ||
          framework.puslisher.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return paginate(this.data, pageIndex, pageSize);
  }
  add(framework: Framework): Framework {
    this.data.push(framework);
    this.saveDataToLocalStorage();
    return framework;
  }
  findItemIndex(id: string): number {
    return findIndex(this.data, item => {
      return item.id == id;
    });
  }
  get(id: string): Framework {
    var index = this.findItemIndex(id);
    if (index != -1) {
      return this.data[index];
    } else {
      return new Framework();
    }
  }
  edit(framework: Framework): Framework {
    var index = this.findItemIndex(framework.id);
    let item = this.get(framework.id);
    if (item && index != -1) {
      this.data[index] = framework;
      this.saveDataToLocalStorage();
    }
    return framework;
  }
  delete(id: string): boolean {
    var index = this.findItemIndex(id);
    if (index != -1) {
      this.data.splice(index, 1);
      this.saveDataToLocalStorage();
      return true;
    }
    return false;
  }
}
