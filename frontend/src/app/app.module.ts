import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* dependency modules */
import { ButtonAllModule, CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, DateTimePickerAllModule, TimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MaskedTextBoxModule, NumericTextBoxAllModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';
import { ContextMenuAllModule, ToolbarAllModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { RecurrenceEditorAllModule, ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';
/* components */
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    ContextMenuAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    MultiSelectAllModule,
    TreeViewModule,
    ButtonAllModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
