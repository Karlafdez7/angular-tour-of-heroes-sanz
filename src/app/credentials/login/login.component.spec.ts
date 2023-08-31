import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthServiceService } from 'src/app/auth-service.service';

import { LoginComponent } from './login.component';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const router = jasmine.createSpyObj('Router', ['navigate']);
  const service = new AuthServiceService(router);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        AuthServiceService
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'Debe de crear un formulario con dos campos, email y password', () => {
    expect( component.profileForm.contains('email') ).toBeTruthy();
    expect( component.profileForm.contains('password') ).toBeTruthy();
  });


  it( 'El email debe de ser obligatorio', () => {
    const control = component.profileForm.get('email');
    control?.setValue('');
    expect( control?.valid ).toBeFalsy();
  });

  it( 'El email debe de ser un correo válido', () => {
      const control = component.profileForm.get('email');
      control?.setValue('rafa@gmail.com');
      expect( control?.valid ).toBeTruthy();
  });

  /*it( 'Debe de llamar al servidor de login', () => {


    component.login();
    const spy = spyOn( service, 'login' ).and.returnValue( false );

    console.log('spy', spy)

    expect( spy ).toBeFalse();

  });*/

});
