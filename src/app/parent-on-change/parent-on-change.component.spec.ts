import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOnChangeComponent } from './parent-on-change.component';

describe('ParentOnChangeComponent', () => {
  let component: ParentOnChangeComponent;
  let fixture: ComponentFixture<ParentOnChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOnChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
