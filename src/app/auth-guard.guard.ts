import { Injectable, inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Tu lógica de verificación de autenticación
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    this.router.navigate(['/credentials/login']);
    return false;
  }
}

// export const canActivateLogged: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   const isLogged = inject(AuthServiceService).isLoggedIn()

//   // Si el usuario no está autenticado, redirige a la página de inicio de sesión
//   return isLogged || createUrlTreeFromSnapshot(route, ['/credentials/login']);
// }


