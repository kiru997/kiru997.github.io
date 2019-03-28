import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SimpleChange } from "@angular/core";
import { PaginateComponent } from "./paginate.component";
import { Paginate } from "../model/model.pagonate";

describe("PaginateComponent", () => {
  let component: PaginateComponent;
  let fixture: ComponentFixture<PaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("paginate is defined and has default value", () => {
    expect(component.paginate).toBeDefined();
    expect(component.paginate).toEqual(new Paginate());
  });
  it("paginateTempalte is defined and has default value", () => {
    expect(component.paginateTempalte).toBeDefined();
    expect(component.paginateTempalte).toEqual([]);
  });
  it("paginate is change after ngOnInit", () => {
    component.paginate = new Paginate(1, 99, 99, 10, []);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.paginateTempalte).toEqual([1, 2, 3, 4, 5]);
    component.paginate.currentPage = 10;
    component.ngOnInit();
    expect(component.paginateTempalte).toEqual([6, 7, 8, 9, 10]);
    component.paginate.currentPage = 5;
    component.ngOnInit();
    expect(component.paginateTempalte).toEqual([3, 4, 5, 6, 7]);
  });
  it("onPaginateTemplate exactly", () => {
    component.paginate = new Paginate();
    let paginateTempalte = component.onPaginateTemplate();

    expect(paginateTempalte).toEqual([]);
    component.paginate.totalPages = 100;

    component.paginate.currentPage = 99;
    paginateTempalte = component.onPaginateTemplate();
    expect(paginateTempalte).toEqual([97, 98, 99, 100]);

    component.paginate.currentPage = 2;
    paginateTempalte = component.onPaginateTemplate();
    expect(paginateTempalte).toEqual([1, 2, 3, 4]);

    component.paginate.currentPage = 20;
    paginateTempalte = component.onPaginateTemplate();
    expect(paginateTempalte).toEqual([18, 19, 20, 21, 22]);
  });
  it("paginate is change after ngOnChanges", () => {
    component.paginate = new Paginate();
    component.ngOnInit();
    expect(component.paginateTempalte).toEqual([]);
    component.ngOnChanges({
      paginate: new SimpleChange(null, new Paginate(22, 1, 99, 99, []), true)
    });
    fixture.detectChanges();
    expect(component.paginateTempalte).toEqual([20, 21, 22, 23, 24]);

    component.ngOnChanges({
      paginate: new SimpleChange(null, new Paginate(99, 1, 99, 99, []), false)
    });
    fixture.detectChanges();
    expect(component.paginateTempalte).toEqual([95, 96, 97, 98, 99]);

    component.ngOnChanges({
      paginate: new SimpleChange(null, new Paginate(1, 1, 99, 99, []), false)
    });
    fixture.detectChanges();
    expect(component.paginateTempalte).toEqual([1, 2, 3, 4, 5]);

    component.ngOnChanges({
      paginate: new SimpleChange(null, new Paginate(72, 1, 99, 99, []), false)
    });
    expect(component.paginateTempalte).toEqual([70, 71, 72, 73, 74]);
  });
});
