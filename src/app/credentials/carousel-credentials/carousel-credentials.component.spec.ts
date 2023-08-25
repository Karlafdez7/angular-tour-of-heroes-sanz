import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCredentialsComponent } from './carousel-credentials.component';

describe('CarouselCredentialsComponent', () => {
  let component: CarouselCredentialsComponent;
  let fixture: ComponentFixture<CarouselCredentialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselCredentialsComponent]
    });
    fixture = TestBed.createComponent(CarouselCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
