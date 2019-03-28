import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { AddformComponent } from "./addform.component";
import { Framework } from "../model/model.framework";
describe("AddformComponent", () => {
  let component: AddformComponent;
  let fixture: ComponentFixture<AddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddformComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("form valid when has value", () => {
    expect(component.frameworkForm.invalid).toBeTruthy();
  });
  it("form invalid when empty", () => {
    expect(component.frameworkForm.valid).toBeFalsy();
  });
  it("name field validate", () => {
    let name = component.frameworkForm.get("name");
    expect(name.valid).toBeFalsy();
    let errors = {};
    errors = name.errors;
    expect(errors["required"]).toBeTruthy();
    name.setValue("react");
    errors = name.errors;
    expect(errors).toBeNull();
  });
  it("image field validate", () => {
    let image = component.frameworkForm.get("image");
    expect(image.valid).toBeFalsy();
    let errors = {};
    errors = image.errors;
    expect(errors["required"]).toBeTruthy();
    image.setValue("react");
    errors = image.errors;
    expect(errors).toBeNull();
  });
  it("puslisher field validate", () => {
    let puslisher = component.frameworkForm.get("puslisher");
    expect(puslisher.valid).toBeFalsy();
    let errors = {};
    errors = puslisher.errors;
    expect(errors["required"]).toBeTruthy();
    puslisher.setValue("react");
    errors = puslisher.errors;
    expect(errors).toBeNull();
  });
  it("on submit Framework Form event ", () => {
    const framework: Framework = new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google");
    component.frameworkForm.setValue(framework);
    component.onSubmitFormEmit.subscribe(emitframework => {
      expect(emitframework).toBe(framework);
    });
  });
  it("form empty when component has call", () => {
    expect(component.frameworkForm.get("id").value.length).not.toEqual(0);
    expect(component.frameworkForm.get("name").value).toBe("");
    expect(component.frameworkForm.get("image").value).toBe("");
    expect(component.frameworkForm.get("puslisher").value).toBe("");
  });
  it("form has value after ngOnChange", () => {
    const framework = new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google");
    component.framework = framework;
    component.ngOnChanges();
    expect(component.frameworkForm.get("id").value).toBe(framework.id);
    expect(component.frameworkForm.get("name").value).toBe(framework.name);
    expect(component.frameworkForm.get("image").value).toBe(framework.image);
    expect(component.frameworkForm.get("puslisher").value).toBe(
      framework.puslisher
    );
  });
});
