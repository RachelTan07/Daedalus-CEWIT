import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin, interactionPlugin, timeGridPlugin];
  calendarEvents: EventInput[] = [
    {title: 'Event Now', start: new Date()}
  ]

  handleClick(arg) {
    if (confirm('Would you like to add an event to ; ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({
        title: 'New Event',
        start: arg.data,
        allDay: arg.allDay
      })
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
