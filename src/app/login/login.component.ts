import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService } from '../alert-service.service'
 import { AuthenticationService } from '../authetication-service.service';
 import { SharedInformationService } from '../shared-information.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private sharedService: SharedInformationService) { }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();
      this.sharedService.IsUserLoggedIn.next(false);

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
                  this.sharedService.IsUserLoggedIn.next(true);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}