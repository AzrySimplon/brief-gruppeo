import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxChoiceComponent } from './checkbox-choice.component';

describe('CheckboxChoiceComponent', () => {
  let component: CheckboxChoiceComponent;
  let fixture: ComponentFixture<CheckboxChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
