import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantListItemComponent } from './rant-list-item.component';

describe('RantListItemComponent', () => {
  let component: RantListItemComponent;
  let fixture: ComponentFixture<RantListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
