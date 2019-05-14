import { Component } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "fullcalendar";
  calendarPlugins = [dayGridPlugin]; // important!
  slotDuration = "00:20:00";

  handleDateClick(data) {
    console.log(data);
  }
}
