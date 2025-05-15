import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationImgComponent } from './presentation-img.component';

describe('PresentationImgComponent', () => {
  let component: PresentationImgComponent;
  let fixture: ComponentFixture<PresentationImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
