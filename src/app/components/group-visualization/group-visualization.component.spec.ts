import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupVisualizationComponent } from './group-visualization.component';

describe('GroupVisualizationComponent', () => {
  let component: GroupVisualizationComponent;
  let fixture: ComponentFixture<GroupVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupVisualizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
