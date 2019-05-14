import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FullcalendarComponent } from "./fullcalendar/fullcalendar.component";
import { FullCalendarModule } from "@fullcalendar/angular"; // for FullCalendar!

@NgModule({
  declarations: [AppComponent, FullcalendarComponent],
  imports: [BrowserModule, AppRoutingModule, FullCalendarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
