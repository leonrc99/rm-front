import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdcDashboardComponent } from './prdc-dashboard.component';

describe('PrdcDashboardComponent', () => {
  let component: PrdcDashboardComponent;
  let fixture: ComponentFixture<PrdcDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrdcDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
