import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarModule } from '../search-bar/search-bar.module';

import { VehicleComponent } from './vehicle.component';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleComponent],
      imports: [
        HttpClientModule,
        SearchBarModule,
        MatTableModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
