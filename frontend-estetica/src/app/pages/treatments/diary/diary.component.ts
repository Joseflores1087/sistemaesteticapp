import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  calendarOptions: any = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      { title: 'Evento 1', date: '2024-12-01' },
      { title: 'Evento 2', date: '2024-12-05' },
    ],
    editable: true,
    selectable: true,
    dateClick: this.handleDateClick.bind(this),
  };

  handleDateClick(arg: any) {
    alert('Fecha seleccionada: ' + arg.dateStr);
  }
}
