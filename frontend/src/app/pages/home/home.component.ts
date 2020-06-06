import { Component, OnInit } from '@angular/core';
import { SchedulerService } from 'src/app/providers/scheduler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  schedulerData = [];
  constructor(public service: SchedulerService, private _snackBar: MatSnackBar) { }
  ngOnInit() {
    this.getApiData();
  }

  getApiData() {
    this.service.getSchedulerEvents().subscribe(res => {

      this.schedulerData = []
      res.data.appointments.forEach((element) => {
        const template = {
          Id: element._id,
          Subject: element.subject,
          StartTime: element.startDate,
          EndTime: element.endDate,
          CategoryColor: '#df5286'
        };
        this.schedulerData.push(template);
      });

    }, err => {

    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
  addEvent(e) {
    let data = e.data
    if (Array.isArray(data)) {
      data = data[0]
    }
    let event = {
      _id: data.Id,
      startDate: new Date(data.StartTime).toISOString(),
      endDate: new Date(data.EndTime).toISOString(),
      subject: data.Subject,
      appointedServices: [],
      appointedTo: 1

    }
    if (e.requestType === 'eventChange') { //while editing the existing event

      this.service.updateSchedule(event._id, event).subscribe(res => {
        this.openSnackBar("success", "")
      }, err => {
        this.openSnackBar(err.error.message, "")
        this.getApiData();
      })

    }


    if (e.requestType === 'eventCreate') { //while creating new event
      delete event._id
      this.service.addSchedule(event).subscribe(res => {
        this.openSnackBar("success", "")
      }, err => {
        this.openSnackBar(err.error.message, "")
        this.getApiData();
      })
    }
    if (e.requestType === 'eventRemove') {
      this.service.deleteSchedule(event._id).subscribe(res => {
        this.openSnackBar("success", "")
      }, err => {
        this.openSnackBar(err.error.message, "")
        this.getApiData();
      })
    }
  }

}
