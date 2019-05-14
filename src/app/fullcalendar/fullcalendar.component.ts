import { Component, OnInit, ElementRef } from "@angular/core";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

@Component({
  selector: "app-fullcalendar",
  templateUrl: "./fullcalendar.component.html",
  styleUrls: ["./fullcalendar.component.scss"]
})
export class FullcalendarComponent implements OnInit {
  constructor(private host: ElementRef) {}

  ngOnInit() {
    let calendar = new Calendar(this.host.nativeElement, {
      plugins: [timeGridPlugin, interactionPlugin],
      dateClick: function(info) {
        alert("Clicked on: " + info.dateStr);
        alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
        alert("Current view: " + info.view.type);
        // change the day's background color just for fun
        // info.dayEl.style.backgroundColor = "red";
      },
      defaultView: "timeGridDay",
      timeZone: "UTC",
      header: {
        left: "prev,next",
        center: "title",
        right: "timeGridDay"
      },
      editable: true
    });

    calendar.render();
  }
}
