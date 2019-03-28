import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FilterComponent } from "./filter.component";
import { FormsModule } from "@angular/forms";
describe("FilterComponent", () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [FilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("search empty when component call", () => {
    expect(component.search).toBe("");
  });
  it("search emit event", () => {
    component.search = "abc";
    component.searchEmit.subscribe(searchemit =>
      expect(searchemit).toBe(component.search)
    );
  });
  it("pageSize is defined ", () => {
    expect(component.pageSize).toBeDefined();
  });
  it("listPageSize is defined ", () => {
    expect(component.listPageSize).toBeDefined();
  });
  it("pageSize emit event", () => {
    component.pageSize = 5;
    component.pageSizeEmit.subscribe(pagesize =>
      expect(pagesize).toBe(component.pageSize)
    );
  });
});
