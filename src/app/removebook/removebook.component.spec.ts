import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebookComponent } from './removebook.component';

describe('RemovebookComponent', () => {
  let component: RemovebookComponent;
  let fixture: ComponentFixture<RemovebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
