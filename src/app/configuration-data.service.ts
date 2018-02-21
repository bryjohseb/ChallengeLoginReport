import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigurationDataService {

  constructor(private http: HttpClient) { }  
  configUrl = 'https://www.beenverified.com/hk/dd/email?email=';
  
  getConfig(email) {        

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Response-Origin':'https://www.beenverified.com/hk/dd/*',
        'Access-Control-Response-Headers':'Authorization',
        'Access-Control-Response-Methods':'GET',   
        'Content-Type': 'application/json'             
      }),
      withCredentials: true,
          
    };
    return this.http.get(this.configUrl + email,  httpOptions);        
    //return this.http.get(this.configUrl).map((data: Response) => data.json());
  }

}
