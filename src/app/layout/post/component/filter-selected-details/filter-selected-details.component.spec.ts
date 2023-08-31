import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterSelectedDetailsComponent } from './filter-selected-details.component';

describe('FilterSelectedDetailsComponent', () => {
  let component: FilterSelectedDetailsComponent;
  let fixture: ComponentFixture<FilterSelectedDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSelectedDetailsComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(FilterSelectedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
