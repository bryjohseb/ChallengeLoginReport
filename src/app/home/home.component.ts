import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user-service.service';
import { ConfigurationDataService } from '../configuration-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  reports: string[] = [];    
  dataApi: any;
  reportsFlag: any;
  loading: Boolean;
  data: any;

  constructor(private userService: UserService, private configService: ConfigurationDataService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(id: number) {
      this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }
  search(){    
    this.loading = true;
    this.configService.getConfig(this.data)
    .subscribe(data => {
        this.loading= false;        
        this.dataApi = data;   
        let currentReport = localStorage.getItem(this.currentUser.username);

        if(currentReport)
            localStorage.setItem(this.currentUser.username, JSON.stringify(currentReport + ',' +this.data));                     
        else
            localStorage.setItem(this.currentUser.username, JSON.stringify(this.data));                     

        let currentReport2 = localStorage.getItem(this.currentUser.username);

        this.reportsFlag= true;                
        let emails = currentReport.split(',');

        this.reports.forEach((item, index) => this.reports.splice(index,1));
        emails.forEach(x => this.reports.push(x));                
    }, error => console.log(error));
  }
}
