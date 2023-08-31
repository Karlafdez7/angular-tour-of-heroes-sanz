import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { ListService } from 'src/app/list.service';
import { ListComponent } from './list.component';

import { Observable, map, of, from } from 'rxjs';
import listModel from 'src/app/listModel';

class service {
  constructor() {}
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  //const service = new ListService(new HttpClient(null));
  const http = jasmine.createSpyObj('HttpClient', ['get']);
  const service = new ListService(http)
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatTableModule,
        MatCheckboxModule
      ],
      providers: [
        
      ]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Init: Debe de cargar los post', () => {
    

    const posts: listModel[] = [];

    spyOn( service, 'getListData' ).and.callFake( () => {

        return new Observable().pipe(map(res => posts));
    });

    component.ngOnInit();

    expect( component.listApi.length ).toBe(0);

  });

  /*it('Init: Debe de cargar almenos un post ', () => {
    

    const posts: listModel[] = [{id: 1, title: '', body: ''}];

    spyOn( service, 'getListData' ).and.callFake( () => {

        return new Observable().pipe(from(posts));
    });

    component.ngOnInit();

    expect( component.listApi.length ).toBe(0);

  });*/


});

