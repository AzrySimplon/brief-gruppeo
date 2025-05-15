import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConnectionComponent } from './header-connection.component';

describe('HeaderConnectionComponent', () => {
  let component: HeaderConnectionComponent;
  let fixture: ComponentFixture<HeaderConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
