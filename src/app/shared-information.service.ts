import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedInformationService {
  public IsUserLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor() { }

}
