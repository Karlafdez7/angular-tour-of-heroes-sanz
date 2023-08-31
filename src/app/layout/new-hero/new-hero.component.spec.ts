import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NewHeroComponent } from './new-hero.component';

describe('NewHeroComponent', () => {
  let component: NewHeroComponent;
  let fixture: ComponentFixture<NewHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHeroComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(NewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
