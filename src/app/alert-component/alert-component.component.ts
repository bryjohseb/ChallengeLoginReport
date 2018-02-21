import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service.service';
import { HttpClient } from '@angular/common/http';
import { ConfigurationDataService } from '../configuration-data.service';
import { User } from '../user';
import { SharedInformationService } from '../shared-information.service';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit {

  message: any;
  currentUser: User;
  isUserLoggedIn: Boolean;
  
     constructor(private alertService: AlertService, private http: HttpClient, private configService: ConfigurationDataService,
        private sharedService: SharedInformationService) { 

      this.sharedService.IsUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
        console.log('Cambio');
      });

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));       
       //this.showConfig();
     }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { if(message) this.message = message.text; });
  }

  showConfig() {
    /*this.configService.getConfig()
      .subscribe(data => console.log(data), error => console.log(error));*/
  }  

}
