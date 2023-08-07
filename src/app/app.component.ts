import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private authService: AuthServiceService, private router: Router){}

  ngOnInit(){
  this.authService.isAuthenticated ? this.router.navigate(['/layout']) : this.router.navigate(['/'])
    console.log(this.authService.isAuthenticated)
  }
  
}
