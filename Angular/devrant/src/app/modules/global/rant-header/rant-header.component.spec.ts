import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantHeaderComponent } from './rant-header.component';

describe('RantHeaderComponent', () => {
  let component: RantHeaderComponent;
  let fixture: ComponentFixture<RantHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
