import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListService } from 'src/app/list.service';
import { EditDataSectionComponent } from '../../../component/edit-data-section/edit-data-section.component';

import { EditPostComponent } from './edit-post.component';

describe('EditPostComponent', () => {
  let component: EditPostComponent;
  let fixture: ComponentFixture<EditPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditPostComponent,
        EditDataSectionComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule]
    });
    fixture = TestBed.createComponent(EditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
