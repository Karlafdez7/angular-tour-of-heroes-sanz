import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from 'src/app/layout/layout.module';

import { SelectedDetailsComponent } from './selected-details.component';

describe('SelectedDetailsComponent', () => {
  let component: SelectedDetailsComponent;
  let fixture: ComponentFixture<SelectedDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedDetailsComponent],
      imports: 
        [
          HttpClientModule,
          LayoutModule
        ]
    });
    fixture = TestBed.createComponent(SelectedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
