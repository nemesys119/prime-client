import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimecheckerComponent } from './primechecker.component';

describe('PrimecheckerComponent', () => {
  let component: PrimecheckerComponent;
  let fixture: ComponentFixture<PrimecheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimecheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimecheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
