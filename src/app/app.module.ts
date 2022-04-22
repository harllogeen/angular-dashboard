import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FacultyListService } from './faculty-list.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SchoolManagementComponent } from './school-management/school-management.component';

@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    SchoolManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FacultyListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
