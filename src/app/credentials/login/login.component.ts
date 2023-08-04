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
  returnUrl: string = '';
  profileForm: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthServiceService, private router: Router, private route: ActivatedRoute){
    this.profileForm=this.fb.group({
      email: ["",[Validators.email , Validators.required]],
      password: ["", [Validators.minLength(8), Validators.required]]
    });
    // this.returnUrl = this.router.navigateByUrl('http://localhost:4200/credentials/login');
    this.returnUrl = this.getReturnUrl(route);
    console.log(this.returnUrl)
   }

   private getReturnUrl(route: ActivatedRoute): string {
    if (route.routeConfig?.data && 'returnUrl' in route.routeConfig.data) {
      return route.routeConfig.data['returnUrl'];
    } else if (route.parent) {
      return this.getReturnUrl(route.parent);
    } else {
      return '/';
    }
  }

   login(){
    console.log('1')
    const email= this.profileForm.get('email')?.value;
    const password= this.profileForm.get('password')?.value;
    if(this.authService.login(email, password)){
      console.log('7');
      this.router.navigateByUrl(this.returnUrl);
    }
   }

  // onCompair(){
  //   const tokenJSON= localStorage.getItem('token')
    
  //   if(tokenJSON){
  //     const token=JSON.parse(tokenJSON);
  //     this.emailLS=token.email;
  //     this.passwordLS=token.password;

  //   }

  //   const email= this.profileForm.get('email')?.value;
  //   const password= this.profileForm.get('password')?.value;

  //   if (this.emailLS, email , this.passwordLS, password){
  //     if(this.emailLS === email && this.passwordLS ===password){
  //       console.log('holis')
  //     }else{
  //       console.log('adiossss')
  //     }
  //   }
  // }
}
