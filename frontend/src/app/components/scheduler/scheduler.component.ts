import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  ScheduleComponent, EventSettingsModel, View, TimelineMonthService,
  ResizeService, EventRenderedArgs, DragAndDropService, CellTemplateArgs, getWeekNumber, TimeScaleModel, getWeekLastDate, PopupOpenEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { extend, Internationalization } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  providers: [TimelineMonthService, ResizeService, DragAndDropService]
})
export class SchedulerComponent {
  @Input()
  set schedulerData(val) {
    console.log(val);
    this.eventSettings = { dataSource: <Object[]>extend([], val, null, true) };
  }
  @Output() dataChange = new EventEmitter();
  public scheduleObj: ScheduleComponent;
  public selectedDate: Date = new Date();
  public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], null, null, true) };
  public currentView: View = 'Day';
  public instance: Internationalization = new Internationalization();
  public timeScale: TimeScaleModel = {
    enable: true,
    slotCount: 4
  };

  getMonthDetails(value: CellTemplateArgs): string {
    return this.instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'yMMMM' });
  }

  getWeekDetails(value: CellTemplateArgs): string {
    return 'Week ' + getWeekNumber(getWeekLastDate(value.date, 0));
  }

  getMajorTime(date: Date): string {
    return this.instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
  }

  getMinorTime(date: Date): string {
    return this.instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
  }

  getDateHeaderText(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'Ed' });
  };

  onEventRendered(args: EventRenderedArgs): void {
    console.log(args.type)
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }

    console.log(args);
  }

  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
      console.log(args);
    }
  }

  onActionBegin(e) {
    console.log(e);
    this.dataChange.emit(e);
  }

}
