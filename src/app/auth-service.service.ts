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
    const tokenJSON= localStorage.getItem('token')
    
    if(tokenJSON){
      const token=JSON.parse(tokenJSON);
      this.emailLS=token.email;
      this.passwordLS=token.password;
    }

    if (email === this.emailLS && password === this.passwordLS) {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      console.log('error')
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
