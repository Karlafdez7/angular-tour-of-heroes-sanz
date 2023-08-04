import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthServiceService} from '../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  emailLS: string | null ='';
  passwordLS: string | null ='';
  profileForm: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthServiceService, private router: Router, private route: ActivatedRoute){
    this.profileForm=this.fb.group({
      email: ["",[Validators.email , Validators.required]],
      password: ["", [Validators.minLength(8), Validators.required]]
    });
   }

  login() {
    const email = this.profileForm.get('email')?.value;
    const password = this.profileForm.get('password')?.value;
    this.authService.login(email, password)
  }


}
