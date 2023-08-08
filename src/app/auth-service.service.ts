import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  emailLS: string | null ='';
  passwordLS: string | null ='';
  emailLSData: string | null ='';
  passwordLSData: string | null ='';
  public isAuthenticated: boolean=false;
  private readonly AUTH_KEY = 'loggedInUser';

  constructor(private router: Router) {
    const userDataJSON = localStorage.getItem(this.AUTH_KEY);

    
    if(userDataJSON){
      const userData=JSON.parse(userDataJSON);
      this.emailLSData=userData.email;
      this.passwordLSData=userData.password;
    }

    if (this.emailLSData && this.passwordLSData) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  login(email: string, password:string):boolean {
    const tokenJSON= localStorage.getItem('token')
    
    
    if(tokenJSON){
      const token=JSON.parse(tokenJSON);
      this.emailLS=token.email;
      this.passwordLS=token.password;
    }

    if (email === this.emailLS && password === this.passwordLS) {
      localStorage.setItem(this.AUTH_KEY, JSON.stringify({ email: email, password: password }));
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
    this.isAuthenticated = false;
    this.router.navigate(['/credentials/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getLoggedInUser(): any {
    // Obtenemos la información de inicio de sesión almacenada.
    const userDataJSON = localStorage.getItem(this.AUTH_KEY);
    return userDataJSON ? JSON.parse(userDataJSON) : null;
  }
}
