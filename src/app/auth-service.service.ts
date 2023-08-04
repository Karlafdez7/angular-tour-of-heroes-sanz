import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  emailLS: string | null ='';
  passwordLS: string | null ='';
  private isAuthenticated: boolean=false;
  constructor() { }

  login(email: string, password:string):boolean {
    console.log('2')
    const tokenJSON= localStorage.getItem('token')
    
    if(tokenJSON){
      const token=JSON.parse(tokenJSON);
      this.emailLS=token.email;
      this.passwordLS=token.password;
      console.log('3')
    }

    if(email === this.emailLS && password === this.passwordLS){
      this.isAuthenticated=true;
      console.log('4')
      return true;
    } else {
      this.isAuthenticated=false;
      console.log('5')
      return false;
    }
  }

  isLoggedIn(): boolean {
    console.log('6')
    return this.isAuthenticated;
  }
}
