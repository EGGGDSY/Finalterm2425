import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'service', component: ServiceComponent },  // Added Service route
  { path: 'service-details', component: ServiceDetailsComponent },  // Added Service Details route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configure router with routes
  exports: [RouterModule],  // Export the RouterModule to make the routes accessible
})
export class AppRoutingModule {}
