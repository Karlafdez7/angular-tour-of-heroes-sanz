import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { DetailComponent } from './list/detail/detail.component';
import { ListComponent } from './list/list.component';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostComponent,
        ListComponent,
        DetailComponent
      ],
      imports: [
        SearchBarModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCheckboxModule
      ]
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
