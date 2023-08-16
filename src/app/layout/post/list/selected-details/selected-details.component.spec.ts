import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDetailsComponent } from './selected-details.component';

describe('SelectedDetailsComponent', () => {
  let component: SelectedDetailsComponent;
  let fixture: ComponentFixture<SelectedDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedDetailsComponent]
    });
    fixture = TestBed.createComponent(SelectedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
