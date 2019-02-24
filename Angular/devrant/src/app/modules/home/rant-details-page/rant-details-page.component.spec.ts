import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantDetailsPageComponent } from './rant-details-page.component';

describe('RantDetailsPageComponent', () => {
  let component: RantDetailsPageComponent;
  let fixture: ComponentFixture<RantDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
