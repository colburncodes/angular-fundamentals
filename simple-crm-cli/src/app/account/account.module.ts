import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { SigninGoogleComponent } from './signin-google/signin-google.component';
import { SigninMicrosoftComponent } from './signin-microsoft/signin-microsoft.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NotAuthorizedComponent,
    SigninGoogleComponent,
    SigninMicrosoftComponent,
  ],
  imports: [CommonModule],
})
export class AccountModule {}
