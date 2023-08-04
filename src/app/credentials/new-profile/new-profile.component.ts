import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';



@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.sass']
})
export class NewProfileComponent {
  newProfile: FormGroup;


  constructor(private router: Router, private fb: FormBuilder){
    this.newProfile= this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.email , Validators.required]],
      password: ["", [Validators.minLength(8), Validators.required]]

    })
  }

  onSave(): void {
    // Obtener los valores del formulario
    const email = this.newProfile.get('email')?.value;
    const password = this.newProfile.get('password')?.value;
    // const user:any[] = [this.newProfile.get('email')?.value,this.newProfile.get('password')?.value]
    const token= {email, password};

    const tokenJSON= JSON.stringify(token)


    // Guardar en localStorage
    localStorage.setItem('token', tokenJSON);
    // localStorage.setItem('password', password);

    // Navegar a otra página (opcional)
    // this.router.navigate(['/otra-ruta']);
  }


}
