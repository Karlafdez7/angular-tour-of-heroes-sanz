import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSelectedDetailsComponent } from './filter-selected-details.component';

describe('FilterSelectedDetailsComponent', () => {
  let component: FilterSelectedDetailsComponent;
  let fixture: ComponentFixture<FilterSelectedDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSelectedDetailsComponent]
    });
    fixture = TestBed.createComponent(FilterSelectedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
