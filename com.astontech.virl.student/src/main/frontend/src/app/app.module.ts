import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule, ClrFormsModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileService } from './services/user-profile.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MenteeComponent } from './mentee/mentee.component';
import { MentorComponent } from './mentor/mentor.component';
import { FormsModule } from '@angular/forms';
import { MenteeFormComponent } from './mentee-form/mentee-form.component';
import { MenteeService } from './services/mentee.service';

@NgModule({
  declarations: [
    AppComponent,
    MenteeComponent,
    MentorComponent,
    MenteeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    ClrFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    UserProfileService,
    MenteeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
