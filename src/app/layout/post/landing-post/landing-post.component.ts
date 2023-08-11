import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-landing-post',
  templateUrl: './landing-post.component.html',
  styleUrls: ['./landing-post.component.sass']
})
export class LandingPostComponent {


  // postIdString: string | null = this.route.snapshot.paramMap.get('id');

  // constructor(private router: Router, private route: ActivatedRoute) {
  //   this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       this.postIdString;
  //     }
  //   });
  //  }

  // navSubscription: Subscription = null;
  // this.navSubscription =this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
  //   if (event instanceof NavigationEnd) {
  //     this.checkHasPdi();
  //     this.initUnitService.initComplementUnit(this.instance);
  //     this.permissions = this.wip.getCurrentProfile().company.permissions;
  //   }
  // });
}
