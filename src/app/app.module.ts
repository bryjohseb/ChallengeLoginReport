import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
// used to create fake backend
import { fakeBackendProvider } from './backend';

import { AppComponent } from './app.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard.guard';
import { AlertService } from './alert-service.service';
import { UserService } from './user-service.service';
import { AuthenticationService } from './authetication-service.service';
import { JwtInterceptor } from './middlecomponent';
import { routing } from './app.routing';
import { ConfigurationDataService } from './configuration-data.service';
import { SharedInformationService } from './shared-information.service';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponentComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    ConfigurationDataService,
    SharedInformationService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }