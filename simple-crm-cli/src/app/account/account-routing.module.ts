import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { RegisterComponent } from './register/register.component';
import { SigninGoogleComponent } from './signin-google/signin-google.component';
import { SigninMicrosoftComponent } from './signin-microsoft/signin-microsoft.component';

const routes: Routes = [
  {
    path: 'account',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'signin-microsoft',
    component: SigninMicrosoftComponent,
  },
  {
    path: 'signin-google',
    component: SigninGoogleComponent,
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent,
    // generated in the prior lesson. you may want to move it to this module and out of AppModule.
  },
];

export class AccountRoutingModule {}
