import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent,
    AboutComponent,
    RegistrationComponent,
    UserProfileComponent,
    ServiceComponent,  
    ServiceDetailsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
