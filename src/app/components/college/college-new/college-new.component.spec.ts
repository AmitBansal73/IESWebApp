import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeNewComponent } from './college-new.component';

describe('CollegeNewComponent', () => {
  let component: CollegeNewComponent;
  let fixture: ComponentFixture<CollegeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
