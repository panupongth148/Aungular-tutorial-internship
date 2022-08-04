import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqaureFlexComponent } from './sqaure-flex.component';

describe('SqaureFlexComponent', () => {
  let component: SqaureFlexComponent;
  let fixture: ComponentFixture<SqaureFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqaureFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqaureFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
