import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin, interactionPlugin, timeGridPlugin];
  calendarEvents: EventInput[] = [
   { title: 'Event Now', start: new Date() },
   { title: 'Appointment', start: new Date ("Thu Feb 13 2020 00:00:00 GMT-0500 (Eastern Standard Time)") },
    { title: 'Appointment', start: new Date ("Thu Feb 02 2020 00:00:00 GMT-0500 (Eastern Standard Time)") }
 ];

  handleClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      console.log(arg.date);
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

  constructor() { }

  ngOnInit() {
  }



}
