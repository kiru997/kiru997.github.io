import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FrameworkService } from "./services/framework.service";
import { FilterComponent } from "./filter/filter.component";
import { ListComponent } from "./list/list.component";
import { AddformComponent } from "./addform/addform.component";
import { PaginateComponent } from "./paginate/paginate.component";
import { ModeldeleteComponent } from "./modeldelete/modeldelete.component";
import { Framework } from "./model/model.framework";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let filtercomponent: FilterComponent;
  let frameworkService: FrameworkService;
  let listcomponent: ListComponent;
  let addformcomponent: AddformComponent;
  let paginatecomponent: PaginateComponent;
  let modeldeletecomponent: ModeldeleteComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [
        AppComponent,
        FilterComponent,
        ListComponent,
        ModeldeleteComponent,
        AddformComponent,
        PaginateComponent
      ],
      providers: [FrameworkService]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    frameworkService = TestBed.get(FrameworkService);
    filtercomponent = fixture.debugElement.query(By.directive(FilterComponent))
      .componentInstance;
    listcomponent = fixture.debugElement.query(By.directive(ListComponent))
      .componentInstance;
    addformcomponent = fixture.debugElement.query(
      By.directive(AddformComponent)
    ).componentInstance;
    paginatecomponent = fixture.debugElement.query(
      By.directive(PaginateComponent)
    ).componentInstance;
    modeldeletecomponent = fixture.debugElement.query(
      By.directive(ModeldeleteComponent)
    ).componentInstance;
    fixture.detectChanges();
  });
  it("should create the app", () => {
    expect(filtercomponent).toBeTruthy();
    expect(listcomponent).toBeTruthy();
    expect(addformcomponent).toBeTruthy();
    expect(paginatecomponent).toBeTruthy();
    expect(modeldeletecomponent).toBeTruthy();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("onChangeFormState filtercomponent emit run", () => {
    component.isFormOpen = true;
    filtercomponent.onChangeFormState();
    expect(component.isFormOpen).toBeFalsy();
  });
  it("onChangePageSize filtercomponent emit run", () => {
    component.pageSize = 5;
    filtercomponent.onChangePageSize(10);
    expect(component.pageSize).toEqual(10);
    expect(component.pageIndex).toEqual(1);
  });
  it("onSearch filtercomponent emit run", () => {
    filtercomponent.onSearch("angualar");
    expect(component.search).toEqual("angualar");
    expect(component.pageIndex).toEqual(1);
  });

  it("onCloseForm run", () => {
    let newframework = new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google");
    component.framework = newframework;
    component.isFormOpen = true;
    addformcomponent.onCloseFormEmit.emit();
    expect(component.isFormOpen).toBeFalsy();
    expect(component.framework).not.toEqual(newframework);
  });
  it("onChangeFormState run", () => {
    component.onChangeFormState();
    expect(component.isFormOpen).toBeTruthy();
    component.onChangeFormState();
    expect(component.isFormOpen).toBeFalsy();
  });
  it("onChangePageSize run ", () => {
    component.pageSize = 5;
    component.pageIndex = 2;
    component.onChangePageSize(10);
    expect(component.pageSize).toEqual(10);
    expect(component.pageIndex).toEqual(1);
  });
  it("onSearch run ", () => {
    component.search = "abc";
    component.pageIndex = 2;
    component.onSearch("abcd");
    expect(component.search).toEqual("abcd");
    expect(component.pageIndex).toEqual(1);
  });
  it("onGetEdit run ", () => {
    let framework = new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google");
    listcomponent.onGetEdit(framework);
    expect(component.isEdit).toBeTruthy();
    expect(component.isFormOpen).toBeTruthy();
    expect(component.framework).toEqual(framework);
  });
  it("onSubmitForm run ", () => {
    component.isEdit = false;
    let framework = new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google");
    spyOn(frameworkService, "add").and.returnValue(framework);
    addformcomponent.frameworkForm.setValue(framework);
    addformcomponent.onSubmitForm();
    expect(component.isEdit).toBeFalsy();
    expect(component.isFormOpen).toBeFalsy();
    expect(frameworkService.add).toHaveBeenCalled();
    let newFramework = new Framework();
    newFramework.id = component.framework.id;
    expect(component.framework).toEqual(newFramework);
    expect(component.paginate).toEqual(
      frameworkService.getPaginate("", component.pageIndex, component.pageSize)
    );
    component.isEdit = true;
    spyOn(frameworkService, "edit").and.returnValue(framework);
    framework.name = "angularjs";
    addformcomponent.frameworkForm.setValue(framework);
    spyOn(frameworkService, "getPaginate").and.returnValue(component.paginate);
    addformcomponent.onSubmitForm();
    expect(component.isEdit).toBeFalsy();
    expect(component.isFormOpen).toBeFalsy();
    expect(frameworkService.edit).toHaveBeenCalled();
    expect(frameworkService.getPaginate).toHaveBeenCalled();
    newFramework.id = component.framework.id;
    expect(component.framework).toEqual(newFramework);
    expect(component.paginate).toEqual(
      frameworkService.getPaginate("", component.pageIndex, component.pageSize)
    );
  });
  it("onDelete run ", () => {
    spyOn(frameworkService, "delete");
    listcomponent.idDelete = "abc-def";
    spyOn(frameworkService, "getPaginate").and.returnValue(component.paginate);
    modeldeletecomponent.onConfirmDelete();
    expect(frameworkService.delete).toHaveBeenCalled();
    expect(frameworkService.getPaginate).toHaveBeenCalled();
    expect(component.paginate).toEqual(
      frameworkService.getPaginate("", component.pageIndex, component.pageSize)
    );
  });
  it("onChangePageIndex run ", () => {
    spyOn(frameworkService, "getPaginate").and.returnValue(component.paginate);
    paginatecomponent.onChangePage(2);
    expect(component.pageIndex).toEqual(2);
    expect(frameworkService.getPaginate).toHaveBeenCalled();
    expect(component.paginate).toEqual(
      frameworkService.getPaginate("", component.pageIndex, component.pageSize)
    );
  });
});
