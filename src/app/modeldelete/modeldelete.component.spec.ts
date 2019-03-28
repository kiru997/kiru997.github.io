import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldeleteComponent } from './modeldelete.component';

describe('ModeldeleteComponent', () => {
  let component: ModeldeleteComponent;
  let fixture: ComponentFixture<ModeldeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
