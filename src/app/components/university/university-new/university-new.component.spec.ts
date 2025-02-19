import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityNewComponent } from './university-new.component';

describe('UniversityNewComponent', () => {
  let component: UniversityNewComponent;
  let fixture: ComponentFixture<UniversityNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
