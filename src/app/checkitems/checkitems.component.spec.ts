import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckitemsComponent } from './checkitems.component';

describe('CheckitemsComponent', () => {
  let component: CheckitemsComponent;
  let fixture: ComponentFixture<CheckitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
