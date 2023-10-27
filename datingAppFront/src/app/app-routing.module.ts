import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { RegisterComponent } from './components/register/register.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [  
  {path: '', component:LandingComponent},
  { path: 'login', component: LoginComponent },
  {path: 'register', component:RegisterComponent},
  {path: 'service', component:ServiceComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'privacy', component:PrivacyComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
