import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataSectionComponent } from './edit-data-section.component';

describe('EditDataSectionComponent', () => {
  let component: EditDataSectionComponent;
  let fixture: ComponentFixture<EditDataSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDataSectionComponent]
    });
    fixture = TestBed.createComponent(EditDataSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
