import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent,
    AboutComponent,
    RegistrationComponent,
    UserProfileComponent,
    ServiceDetailsComponent, 
    LoginComponent, 
    HeaderComponent, 
    FooterComponent, ServicesComponent,
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
