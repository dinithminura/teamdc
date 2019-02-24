import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantFooterComponent } from './rant-footer.component';

describe('RantFooterComponent', () => {
  let component: RantFooterComponent;
  let fixture: ComponentFixture<RantFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
