import { TestBed } from "@angular/core/testing";

import { FrameworkService } from "./framework.service";
import { Framework } from "../model/model.framework";
import { Component } from "@angular/core";
describe("FrameworkService", () => {
  let frameworkService: FrameworkService;
  beforeEach(() => {
    frameworkService = new FrameworkService();
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    const service: FrameworkService = TestBed.get(FrameworkService);
    expect(service).toBeTruthy();
  });
  it("#data should be define has default value", () => {
    expect(frameworkService.data).toBeDefined();
    expect(frameworkService.data).toEqual([]);
  });
  it("#add framework should be success", () => {
    let count = frameworkService.data.length;
    let framework = new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google");
    expect(frameworkService.add(framework)).toEqual(framework);
    expect(count).toEqual(frameworkService.data.length - 1);
    console.log();
    expect(frameworkService.data[frameworkService.data.length - 1]).toEqual(
      framework
    );
    expect(JSON.parse(JSON.stringify(frameworkService.data))).toEqual(
      JSON.parse(
        localStorage.getItem("data")
          ? localStorage.getItem("data")
          : JSON.stringify([])
      )
    );
  });
  it("#saveDataToLocalStorage save status", () => {
    expect(frameworkService.saveDataToLocalStorage()).toBeUndefined();
  });
  it("#findItemIndex return exactly index", () => {
    frameworkService.data = [
      new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google"),
      new Framework("react", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Facebook")
    ];
    expect(frameworkService.findItemIndex(frameworkService.data[0].id)).toEqual(
      0
    );
    expect(frameworkService.findItemIndex(frameworkService.data[1].id)).toEqual(
      1
    );
  });
  it("#get return exactly framework", () => {
    frameworkService.data = [
      new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google"),
      new Framework("react", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Facebook")
    ];
    expect(frameworkService.get(frameworkService.data[0].id)).toEqual(
      frameworkService.data[0]
    );
    expect(frameworkService.get(frameworkService.data[1].id)).toEqual(
      frameworkService.data[1]
    );
  });
  it("#edit run ", () => {
    frameworkService.data = [
      new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google"),
      new Framework("react", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Facebook")
    ];
    let editframework = frameworkService.data[1];
    editframework.name = "vuejs";
    editframework.puslisher = "";
    expect(frameworkService.edit(editframework)).toEqual(editframework);
    expect(JSON.parse(JSON.stringify(frameworkService.data))).toEqual(
      JSON.parse(
        localStorage.getItem("data")
          ? localStorage.getItem("data")
          : JSON.stringify([])
      )
    );
  });
  it("#delete run ", () => {
    frameworkService.data = [
      new Framework("angular", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Google"),
      new Framework("react", "https://cdn-images-1.medium.com/max/1200/1*p97BugR0XeVxY__7CqL9fA.png", "Facebook")
    ];
    expect(frameworkService.delete(frameworkService.data[0].id)).toEqual(true);
    expect(frameworkService.delete("")).toEqual(false);
    expect(JSON.parse(JSON.stringify(frameworkService.data))).toEqual(
      JSON.parse(
        localStorage.getItem("data")
          ? localStorage.getItem("data")
          : JSON.stringify([])
      )
    );
  });
});
