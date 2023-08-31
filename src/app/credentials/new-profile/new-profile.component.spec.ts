import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NewProfileComponent } from './new-profile.component';

describe('NewProfileComponent', () => {
  let component: NewProfileComponent;
  let fixture: ComponentFixture<NewProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProfileComponent],
      imports: [MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
                BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(NewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
