import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JitEvaluator } from '@angular/compiler';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  profileForm: FormGroup;

  

   constructor(private router:Router, private fb:FormBuilder){
    this.profileForm=this.fb.group({
      email: ["",[Validators.email , Validators.required]],
      password: ["", [Validators.minLength(8), Validators.required]]
    })
   }

  loadSibling(){
    this.router.navigateByUrl('/main')
  }

}
