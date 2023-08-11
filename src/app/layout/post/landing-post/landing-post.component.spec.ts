import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPostComponent } from './landing-post.component';

describe('LandingPostComponent', () => {
  let component: LandingPostComponent;
  let fixture: ComponentFixture<LandingPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPostComponent]
    });
    fixture = TestBed.createComponent(LandingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
