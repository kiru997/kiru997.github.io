import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ListComponent } from "./list.component";
import { ModeldeleteComponent } from "../modeldelete/modeldelete.component";
import { Framework } from "../model/model.framework";
import { By } from '@angular/platform-browser';
describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let modeldeleteComponent :ModeldeleteComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, ModeldeleteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    modeldeleteComponent = fixture.debugElement.query(By.directive(ModeldeleteComponent)).componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("idDelete empty when component init", () => {
    expect(component.idDelete).toBe("");
  });
  it("data is array", () => {
    expect(component.data).toEqual([]);
  });
  it("get edit framework  exactly", () => {
    let framework: Framework = new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google");
    component.onGetEditEmit.subscribe(frameworkemit =>
      expect(frameworkemit).toBe(framework)
    );
  });
  it("onDelete set exactly id", () => {
    let id = "123-abc";
    component.onDelete(id);
    expect(component.idDelete).toBe(id);
  });
  it("onDeleteEmit send exactly id", () => {
    let id = "123-abc";
    component.idDelete = id;
    component.onGetEditEmit.subscribe(iddeleteemit =>
      expect(iddeleteemit).toBe(component.idDelete)
    );
  });
  it("onConfirmDelete run", () => {
    let id = "123-abc";
    component.idDelete = id;
    component.onConfirmDelete(true);
    expect(component.idDelete).toBe("");
    component.idDelete = id;
    component.onConfirmDelete(false);
    expect(component.idDelete).toBe("");
    let oldIdDelete=component.idDelete = id;
    modeldeleteComponent.onConfirmDelete();
    expect(component.idDelete==oldIdDelete).toBeFalsy();
    oldIdDelete=component.idDelete = id;
    modeldeleteComponent.onDismisDelete();
    expect(component.idDelete==oldIdDelete).toBeFalsy();
  });
});
