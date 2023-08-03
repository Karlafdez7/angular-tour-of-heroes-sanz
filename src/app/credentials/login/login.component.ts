import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  profileForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.profileForm=this.fb.group({
      email: ["",[Validators.email , Validators.required]],
      password: ["", [Validators.minLength(8), Validators.required]]
    })
   }

}
