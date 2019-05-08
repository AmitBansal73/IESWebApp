import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamNewComponent } from './stream-new.component';

describe('StreamNewComponent', () => {
  let component: StreamNewComponent;
  let fixture: ComponentFixture<StreamNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
