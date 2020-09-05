import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddyearComponent } from './addyear.component';

describe('AddyearComponent', () => {
  let component: AddyearComponent;
  let fixture: ComponentFixture<AddyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
