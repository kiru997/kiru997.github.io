import { Framework } from "./model.framework";
export class Paginate {
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: Array<Framework>;
  constructor(
    currentPage: number = 0,
    perPage: number = 0,
    total: number = 0,
    totalPages: number = 0,
    data: Array<Framework> = []
  ) {
    this.currentPage = currentPage;
    this.perPage = perPage;
    this.total = total;
    this.totalPages = totalPages;
    this.data = data;
  }
}
