import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCountChartComponent } from './student-count-chart.component';

describe('StudentCountChartComponent', () => {
  let component: StudentCountChartComponent;
  let fixture: ComponentFixture<StudentCountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
