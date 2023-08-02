import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfileComponent } from './new-profile.component';

describe('NewProfileComponent', () => {
  let component: NewProfileComponent;
  let fixture: ComponentFixture<NewProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProfileComponent]
    });
    fixture = TestBed.createComponent(NewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
