import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UniversityListComponent } from './university/university-list/university-list.component';
import { CollegeListComponent } from './college/college-list/college-list.component';
import { CollegeNewComponent } from './college/college-new/college-new.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UniversityListComponent,
    CollegeListComponent,
    CollegeNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
