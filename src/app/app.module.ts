import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentRegistrationComponent} from './authentication/student-registration/student-registration.component'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MentorRegisterComponent } from './authentication/mentor-register/mentor-register.component';
import { LoginComponent } from './authentication/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    MentorRegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'student',
        component: StudentRegistrationComponent
      },
      {
        path: 'mentor',
        component: MentorRegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
