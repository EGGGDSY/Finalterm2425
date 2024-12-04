import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service', component: ServiceComponent,},
  { path: '', component: AboutComponent,outlet: 'left' },
  { path: '', component: ServiceDetailsComponent,outlet: 'right'},
  { path: '', component: HeaderComponent, outlet: 'header' },
  { path: '', component: FooterComponent, outlet: 'footer' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
